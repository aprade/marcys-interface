import axios, { AxiosRequestConfig } from 'axios';

enum Methods {
  POST = 'post',
  GET = 'get'
}

interface Config<T> {
  method?: Methods;
  data?: T;
}

const request = <T>(
  endpoint: string,
  config: Config<T>
): AxiosRequestConfig => {
  const url = process.env.API_URL;

  return {
    url: `${url}/${endpoint}`,
    headers: {
      'Content-Type': 'application/json'
    },
    ...config
  };
};

const http = async <T>(req: AxiosRequestConfig): Promise<T> => {
  const res = await axios(req);
  console.log('http.http.res', res);
  const body = res.data as T;
  console.log('http.http.body', body);

  return body;
};

export const get = async <T>(endpoint: string): Promise<T> =>
  http<T>(request(endpoint, { method: Methods.GET }));

export const post = async <I, D>(endpoint: string, body: I): Promise<D> =>
  http<D>(request<I>(endpoint, { method: Methods.POST, data: body }));

// import fetch, { Request, RequestInfo } from 'node-fetch';

// interface Init {
//   method?: string;
//   body?: string;
// }

// const request = (endpoint: string, init?: Init): Request => {
//   const url = process.env.API_URL || 'http://localhost:3000/';

//   return new Request(`${url}/${endpoint}`, {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     ...init
//   });
// };

// const http = async <T>(req: RequestInfo): Promise<T> => {
//   const res = await fetch(req);
//   const body = (await res.json()) as T;

//   // For non-success status codes we throw the body as it carries the error type.
//   if (!res.ok) {
//     throw new Error(`${res} \n${body}`);
//   }

//   return body;
// };

// export const get = async <T>(endpoint: string, options?: any): Promise<T> =>
//   http<T>(request(endpoint, { method: 'GET', ...options }));

// export const post = async <I, D>(
//   endpoint: string,
//   body: I,
//   options?: any
// ): Promise<D> =>
//   http<D>(
//     request(endpoint, {
//       method: 'POST',
//       body: JSON.stringify(body),
//       ...options
//     })
//   );
