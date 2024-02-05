import { useCreatePresignedUploadLinkMutation } from "../graphql/generated/graphql";
import { useCallback } from "react";
import axios from "axios";

type UploadCallback = (
  result: { externalId: string; url: string } | null,
  error: any
) => void;

export function useFileUploader() {
  const [createPresignedUploadLinkMutation] =
    useCreatePresignedUploadLinkMutation();

  const uploadFile = useCallback(
    async (file: File, callback: UploadCallback) => {
      try {
        const { data } = await createPresignedUploadLinkMutation({
          variables: { input: { mimeType: file.type } },
        });

        const postData = data?.createPresignedUploadLink;

        if (!postData) {
          throw new Error("Presigned link creation failed");
        }

        const formData = new FormData();
        for (const key in postData.formData) {
          formData.append(key, postData.formData[key]);
        }
        formData.append("file", file);

        const cancelSource = axios.CancelToken.source();

        await axios.post(postData.postURL, formData, {
          cancelToken: cancelSource.token,
        });

        const result = {
          externalId: postData.fileKey,
          url: postData.getURL,
        };

        callback(result, null);
      } catch (error) {
        callback(null, error);
      }
    },
    [createPresignedUploadLinkMutation]
  );

  return { uploadFile };
}
