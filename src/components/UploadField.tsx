import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import { UploadedFile } from '../types';
import { id, useFileUploader } from '../utils';

interface Props {
  name: string;
  accept: string;
  preview?: boolean;
  initializePreviewUrl?: string;
  previewFileName?: boolean;
  disabled?: boolean;
  uploadLabel: string;
}

export function UploadField({
  name,
  preview,
  accept = '*',
  initializePreviewUrl = '',
  previewFileName,
  disabled,
  uploadLabel,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(initializePreviewUrl);
  const input = useRef<HTMLInputElement | null>(null);
  const [field, meta] = useField(name);
  const { uploadFile } = useFileUploader();

  useEffect(() => {
    if (input.current && field.value) {
      setPreviewUrl(initializePreviewUrl);
    }
  }, [initializePreviewUrl, field.value]);

  const handleOpenDialog = useCallback(() => {
    input.current?.click();
  }, []);

  const handleOnChange = useCallback(() => {
    const files = input.current?.files;
    if (files?.length) {
      const file = files[0];
      setIsLoading(true);

      // Provide a callback function to handle the result and error
      uploadFile(file, (result, error) => {
        setIsLoading(false);

        if (error) {
          // Handle error appropriately, e.g., show an error message
          console.error('File upload error:', error);
        } else {
          // Handle successful upload result, e.g., update UI with the result
          console.log('File uploaded successfully:', result);
        }
      });
    }
  }, [uploadFile]);

  const handleOnRemove = useCallback(() => {
    setPreviewUrl(initializePreviewUrl);
    field.value && input.current && (input.current.value = ''); // Reset input value
    field.onChange({ target: { name, value: undefined } });
  }, [initializePreviewUrl, name, field]);

  return (
    <>
      <input accept={accept} onChange={handleOnChange} ref={input} className="hidden" type="file" />
      <div className="flex items-center space-x-4">
        {preview && previewUrl && (
          <img src={previewUrl} alt="Preview" className="h-16 w-16 object-cover rounded-full" />
        )}
        {previewFileName && field.value ? <p className="text-sm">{field.value.name}</p> : null}
        <button
          disabled={disabled || isLoading}
          onClick={handleOpenDialog}
          className={`bg-blue-500 text-white px-4 py-2 rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {uploadLabel}
        </button>
        <button
          disabled={!field.value || disabled || isLoading}
          onClick={handleOnRemove}
          className={`bg-red-500 text-white px-4 py-2 rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {'حذف'}
        </button>
      </div>
      {meta.touched && meta.error && <p className="text-red-500 text-sm">{meta.error}</p>}
    </>
  );
}
