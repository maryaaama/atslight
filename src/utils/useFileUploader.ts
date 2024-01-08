// Import necessary dependencies
import { useCreatePresignedUploadLinkMutation } from '../graphql/generated/graphql';
import { useCallback } from 'react';
import axios from 'axios';

// Define the type for the callback function
type UploadCallback = (result: { externalId: string; url: string } | null, error: any) => void;

// Define the custom hook for file uploading
export function useFileUploader() {
  // Use the createPresignedUploadLinkMutation hook from generated GraphQL code
  const [createPresignedUploadLinkMutation] = useCreatePresignedUploadLinkMutation();

  // Define the uploadFile function using useCallback
  const uploadFile = useCallback(async (file: File, callback: UploadCallback) => {
    try {
      // Make the GraphQL mutation to get the presigned upload link
      const { data } = await createPresignedUploadLinkMutation({
        variables: { input: { mimeType: file.type } },
      });

      // Extract the necessary data from the mutation response
      const postData = data?.createPresignedUploadLink;

      // Check if the required data is available
      if (!postData) {
        throw new Error('Presigned link creation failed');
      }

      // Create a FormData object and append the required data
      const formData = new FormData();
      for (const key in postData.formData) {
        formData.append(key, postData.formData[key]);
      }
      formData.append('file', file);

      // Create a cancel token for the request
      const cancelSource = axios.CancelToken.source();

      // Make the actual file upload request using Axios
      await axios.post(postData.postURL, formData, {
        cancelToken: cancelSource.token,
      });

      // If successful, prepare the result object
      const result = {
        externalId: postData.fileKey,
        url: postData.getURL,
      };

      // Call the callback with the result and null for the error
      callback(result, null);
    } catch (error) {
      // If there's an error, call the callback with null for the result and the error object
      callback(null, error);
    }
  }, [createPresignedUploadLinkMutation]);

  // Return the uploadFile function from the hook
  return { uploadFile };
}
