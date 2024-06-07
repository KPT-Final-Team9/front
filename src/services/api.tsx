import { headers } from 'next/headers';
import returnFetch from 'return-fetch';
// export const baseApi = axios.create({
//   baseURL: 'http://localhost:3000',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// });

export const baseApi = returnFetch({
  baseUrl: 'http://localhost:3000',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

// TODO: 당장 기능 구현 해야하면 헤더에 토큰 고정으로 박으셔도됩니다
export const authApi = {
  baseUrl: 'http://localhost:3000',
  headers: { Accept: 'application/json', Authorization: `Bearer sadsad5asdSS` },
};

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
