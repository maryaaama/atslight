import {
  CompanyCategory,
  CompanySize,
  CompanyTranslationInput,
  Language,
} from '../../graphql/generated/graphql';
import { UploadedFile } from '../../types';

export interface FormValues {
  translations: CompanyTranslationInput[];
  languages: Language[];
  category: CompanyCategory;
  companySize: CompanySize;
  customWebsiteHost: string;
  logo?: UploadedFile;
}
