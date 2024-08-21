import { createContext, useContext } from 'react';
import { Language } from '../graphql/generated/graphql';

const LangContext = createContext<Language>(Language.En);
export const LangProvider = LangContext.Provider;
export function useLang() {
  return useContext(LangContext);
}
