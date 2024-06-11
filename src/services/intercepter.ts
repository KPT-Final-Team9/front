import returnFetch, { ReturnFetch } from 'return-fetch';
import { auth } from '@/auth';
import { CustomSession } from '@/types/auth';

// 로깅
export const logRequestInterceptor: ReturnFetch = args =>
  returnFetch({
    ...args,
    interceptors: {
      request: async args => {
        console.log('********* before sending request *********');
        console.log(args);
        console.log('url:', args[0].toString());
        console.log('requestInit:', args[1], '\n\n');
        return args;
      },
      response: async (response, requestArgs) => {
        console.log('********* after receiving response *********');
        console.log(response);
        console.log('url:', requestArgs[0].toString());
        console.log('requestInit:', requestArgs[1], '\n\n');
        return response;
      },
    },
  });

// baseURL 지정
export const baseUrlInterceptor =
  (publicApiPath: string): ReturnFetch =>
  args =>
    returnFetch({
      ...args,
      interceptors: {
        request: async args => {
          let url = args[0];

          if (url instanceof URL) {
            url.href = `${url.origin}/${publicApiPath}${url.pathname}`;
          }
          if (typeof url === 'string') {
            url = `/${publicApiPath}${url}`;
          }
          args[0] = url;

          return args;
        },
      },
    });
export const publicApiBaseUrl = baseUrlInterceptor('public-api');
export const apisBaseUrl = baseUrlInterceptor('apis');

// header에 jwt token 삽입
export const setJWInterceptor: ReturnFetch = args =>
  returnFetch({
    ...args,
    interceptors: {
      request: async args => {
        console.log('-----setJWTTOKEN-----');
        const userInfo = (await auth()) as CustomSession;
        let headers = new Headers(args[1]?.headers || {});
        headers.set('Authorization', `Bearer ${userInfo.token}`);
        args[1] = {
          ...args[1],
          headers,
        };
        return args;
      },
    },
  });

/* nextNodeServerApi */
// authJS 같은 next node server 로직에서 사용하는 api입니다.

const base = {
  baseUrl: process.env.HOST_URL,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
};

// 'http://localhost:3000/public-api'
export const nodePublicApi = logRequestInterceptor({
  fetch: publicApiBaseUrl({
    ...base,
  }),
});

// 'http://localhost:3000/apis'
export const nodeApi = logRequestInterceptor({
  fetch: apisBaseUrl({
    ...base,
  }),
});
