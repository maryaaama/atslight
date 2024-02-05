import { JobField } from "./graphql/generated/graphql";

export type FileWithId = {
  file: File;
  id: string;
};

export type UploadedFile = {
  name: string;
  type: string;
  externalId: string;
  localId: string;
};

export interface Field {
  type: JobField;
  position: number;
  required: boolean;
}
