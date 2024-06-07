import returnFetch from 'return-fetch';
// export const baseApi = axios.create({
//   baseURL: 'http://localhost:3000',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// });

// function api() {
//   const headersList = headers();
//   const referer = headersList.get('referer');
//   const baseApi = returnFetch({
//     baseUrl: 'http://localhost:3000',
//     headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
//   });
//   return baseApi;
// }
// export const baseApi1 = api();

// 아래 함수는 정상적으로 동작합니다
export const baseApi = returnFetch({
  baseUrl: 'http://localhost:3000',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

// 콜백 url을 붙여주지 않으면 src > auth.ts >  _signIn 에서  정상적으로 동작하지 않습니다.
export const basePublicApi1 = returnFetch({
  baseUrl: '/public-api',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

// 아래 함수는 콜백url을 붙였음에도 src > auth.ts >  _signIn 에서  정상적으로 동작하지 않습니다
export const basePublicApi2 = returnFetch({
  baseUrl: 'http://localhost:3000/public-api',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

// export async function fetchWithHeaders(endpoint: string, options: any) {
//   const headersList = headers();
//   const referer = headersList.get('referer');
//   console.log(headersList);

//   return await returnFetch({
//     baseUrl: 'http://localhost:3000',
//     endpoint,
//     headers: {
//       ...options.headers,
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Referer: referer || '',
//     },
//     ...options,
//   });
// }
