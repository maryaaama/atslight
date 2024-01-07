import {
    IdGetterObj,
    InMemoryCache,
    StoreObject,
    defaultDataIdFromObject,
  } from '@apollo/client';
  import { ApolloClient } from '@apollo/client';
  import { HttpLink } from '@apollo/client';
  import { setContext } from '@apollo/client/link/context';
  import { onError } from '@apollo/client/link/error';
  import { getToken } from './token';
  
  const logoutLink = onError(({ graphQLErrors }) => {
    const token = getToken();
  
    const permissionError = graphQLErrors
      ? graphQLErrors.some(({ extensions }) => {
          if (!extensions) {
            return false;
          }
          const exception = extensions.exception as { errcode?: string };

          return exception.errcode === '42501';
        })
      : false;
  
    // if (token && permissionError) {
    //   window.location.href = '/logout';
    // }
  });
  
  type CacheIdGetter = IdGetterObj & {
    nodeId?: string;
  } & StoreObject;
  
  const uri = process.env.REACT_APP_GRAPHQL_ENDPOINT;
  
  
  const httpLink = new HttpLink({
    uri,
  });
  
  const authLink = setContext((_, { token }) => {
    token = token || getToken();
    if (token) {
      return {
        headers: {
          authorization: `token ${token}`,
        },
      };
    }
    return {};
  });

  const cache = new InMemoryCache({
    dataIdFromObject: (object: CacheIdGetter) =>
      object.nodeId || defaultDataIdFromObject(object),
  });
  
  const link = authLink.concat(httpLink);
  
  export const client = new ApolloClient({
    link: logoutLink.concat(link),
    cache,
  });