import { Language } from '../graphql/generated/graphql';

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
  langs: Language[] = languages,
): Translation<T>[] {
  return langs.map(lang => {
    const val = values?.find(v => v.lang === lang);
    return { ...defaultValue, ...val, lang };
  });
}

export function prepareTranslationsForMutation<T extends {}>(
  translations: Translation<T>[] | undefined,
  oldTranslations: Translation<T>[] | undefined,
  isValid: (translation: T) => boolean,
) {
  const _translations: TranslationInput<T> = {
    delete: [],
    update: [],
    create: [],
  };

  translations?.forEach(translation => {
    if (!isValid(translation)) {
      _translations.delete.push(translation.lang);
    } else if (oldTranslations?.find(t => t.lang === translation.lang)) {
      _translations.update.push(translation);
    } else {
      _translations.create.push(translation);
    }
  });

  return _translations;
}
