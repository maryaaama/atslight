import {
  JobTranslationsJobIdFkeyInverseInput,
  JobTranslationsJobIdFkeyJobTranslationsCreateInput,
  JobTranslationJobTranslationsPkeyDelete,
  JobTranslationOnJobTranslationForJobTranslationsJobIdFkeyUsingJobTranslationsPkeyUpdate,
  Language,
} from "../graphql/generated/graphql";

export const languages = [
  Language.Ar,
  Language.En,
  Language.Fa,
  Language.Ku,
  Language.Tr,
];

type Translation<T> = T & {
  lang: Language;
};

interface TranslationInput<T> {
  delete: Language[];
  update: Translation<T>[];
  create: Translation<T>[];
}

export function prepareLanguagesForFormik<T extends {}>(
  defaultValue: T,
  values?: Translation<T>[],
  langs: Language[] = languages
): Translation<T>[] {
  return langs.map((lang) => {
    const val = values?.find((v) => v.lang === lang);
    return { ...defaultValue, ...val, lang };
  });
}



export function prepareTranslationsForMutation<T extends {}>(
  translations: Translation<T>[] | undefined,
  oldTranslations: Translation<T>[] | undefined,
  isValid: (translation: T) => boolean,
  jobId: number // شناسه شغل که باید به صورت داینامیک ارسال شود
): JobTranslationsJobIdFkeyInverseInput {
  const _translations: JobTranslationsJobIdFkeyInverseInput = {
    deleteByJobIdAndLang: [],
    updateByJobIdAndLang: [],
    create: [],
  };

  translations?.forEach((translation) => {
    if (!isValid(translation)) {
      _translations.deleteByJobIdAndLang!.push({
        jobId: jobId,
        lang: translation.lang,
      } as JobTranslationJobTranslationsPkeyDelete);
    } else if (oldTranslations?.find((t) => t.lang === translation.lang)) {
      _translations.updateByJobIdAndLang!.push({
        jobId: jobId,
        lang: translation.lang,
        patch: {
          title: (translation as any).title, // باید مشخص کنید که کدام فیلدها باید به‌روزرسانی شوند
          description: (translation as any).description,
          requirements: (translation as any).requirements,
          fieldOfStudy: (translation as any).fieldOfStudy,
          orientation: (translation as any).orientation,
        },
      } as JobTranslationOnJobTranslationForJobTranslationsJobIdFkeyUsingJobTranslationsPkeyUpdate);
    } else {
      _translations.create!.push({
        lang: translation.lang,
        title: (translation as any).title,
        description: (translation as any).description,
        requirements: (translation as any).requirements,
        fieldOfStudy: (translation as any).fieldOfStudy,
        orientation: (translation as any).orientation,
      } as JobTranslationsJobIdFkeyJobTranslationsCreateInput);
    }
  });

  return _translations;
}