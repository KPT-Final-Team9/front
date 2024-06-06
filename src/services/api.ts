import returnFetch from 'return-fetch';

export const baseApi = returnFetch({
  baseUrl: 'http://localhost:3000',
  headers: { Accept: 'application/json' },

  interceptors: {
    request: async args => {
      console.log('********* before sending request *********');
      console.log('url:', args[0].toString());
      console.log('requestInit:', args[1], '\n\n');
      return args;
    },

    response: async (response, requestArgs) => {
      console.log('********* after receiving response *********');
      console.log('url:', requestArgs[0].toString());
      console.log('requestInit:', requestArgs[1], '\n\n');
      return response;
    },
  },
});

// TODO: 당장 기능 구현 해야하면 헤더에 토큰 고정으로 박으셔도됩니다
export const authApi = {
  baseUrl: 'http://localhost:3000',
  headers: { Accept: 'application/json' },
};
