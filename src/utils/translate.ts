import { Language } from '../graphql/generated/graphql';
import { useLang } from '../contexts/languageContext';

interface LangObject {
  lang: Language;
}

interface Translations<T extends LangObject> {
  nodes: (T | null)[];
}

interface TranslateAble<T extends LangObject> {
  translations: Translations<T>;
}

const proxiesTranslation = new Proxy({} as any, {
  get(_, name) {
    return `NOT_TRANSLATED: ${String(name)}`;
  },
});

const emptyTranslationProxy = new Proxy({} as any, {
  get() {
    return '';
  },
});

export function getTranslation<T extends LangObject>(
  { nodes }: Translations<T>,
  lang: Language,
  empty = false,
): T {
  const tran = nodes.find(i => i && i.lang === lang);

  if (tran) {
    return tran;
  }

  if (empty) {
    return emptyTranslationProxy;
  }

  if (nodes.length > 0 && nodes[0]) {
    return nodes[0];
  }

  return proxiesTranslation;
}

export function useTranslation<T extends LangObject>(
  translateAble: TranslateAble<T> | undefined | null,
  empty = false,
): T {
  const lang = useLang();
  if (!translateAble) {
    if (empty) {
      return emptyTranslationProxy;
    }

    return proxiesTranslation;
  }

  return getTranslation<T>(translateAble.translations, lang, empty);
}
