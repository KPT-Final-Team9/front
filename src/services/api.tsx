import { apisBaseUrl, logRequestInterceptor, publicApiBaseUrl } from '@/services/intercepter';
import { getAuth } from '@/serverActions/index';

// async function createApiInstance(headers) {
//   let baseUrl = '/';
//   let headersList = null;

//   if (typeof window === 'undefined') {
//     // 서버 사이드에서 실행될 때
//     const { headers: serverHeaders } = await import('next/headers');
//     headersList = serverHeaders();
//     const host = headersList.get('host');
//     if (host) {
//       baseUrl = host;
//     }
//   } else {
//     baseUrl = '/';
//   }

//   return {
//     baseUrl,
//     headers,
//   };
// }

// // /api
// export async function baseApis() {
//   const userInfo = await getAuth();

//   const apiInstanceConfig = await createApiInstance({
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${userInfo.token}`,
//   });

//   return logRequestInterceptor({
//     fetch: apisBaseUrl({
//       ...apiInstanceConfig,
//     }),
//   });
// }

// // public-api
// export async function basePublicApi() {
//   const publicApiInstanceConfig = await createApiInstance({
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   });
//   return publicApiBaseUrl({
//     fetch: logRequestInterceptor({
//       ...publicApiInstanceConfig,
//     }),
//   });
// }

export async function baseApis() {
  let baseUrl = process.env.HOST_URL;
  let headersList = null;
  const userInfo = await getAuth();

  const base = {
    baseUrl: baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  if (typeof window === 'undefined') {
    // 서버 사이드에서 실행될 때
    const { headers } = await import('next/headers');
    headersList = headers();
    const host = headersList.get('host');
    if (host) {
      baseUrl = host;
    }
  } else {
    baseUrl = '/';
  }
  return apisBaseUrl({
    fetch: logRequestInterceptor({
      ...base,
    }),
  });
}

export async function basePublicApi() {
  let baseUrl = process.env.HOST_URL;
  let headersList = null;

  const base = {
    baseUrl: baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (typeof window === 'undefined') {
    // 서버 사이드에서 실행될 때
    const { headers } = await import('next/headers');
    headersList = headers();
    const host = headersList.get('host');
    if (host) {
      baseUrl = host;
    }
  } else {
    baseUrl = '/';
  }
  return logRequestInterceptor({
    fetch: publicApiBaseUrl({
      ...base,
    }),
  });
}
