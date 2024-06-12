import { apisBaseUrl, logRequestInterceptor, publicApiBaseUrl } from '@/services/intercepter';
import { getAuth } from '@/serverActions/index';

/*  /api */
export async function baseApis() {
  let baseUrl = process.env.HOST_URL;
  let headersList = null;
  const userInfo = await getAuth();

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

  const base = {
    baseUrl: baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  return apisBaseUrl({
    ...base,
  });
}

/*/public-api */
export async function basePublicApi() {
  let baseUrl = process.env.HOST_URL;
  let headersList = null;

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

  const base = {
    baseUrl: baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return logRequestInterceptor({
    fetch: publicApiBaseUrl({
      ...base,
    }),
  });
}

//
export async function fetchJsonData(url: string, requestInit: RequestInit) {
  const fetchInstance = await baseApis();
  const response = await fetchInstance(url, requestInit);
  if (!response.ok) {
    throw new Error(`Error fetching data from ${url}`);
  }
  return await response.json();
}
