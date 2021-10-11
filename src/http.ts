enum Methods {
  POST = 'POST',
  GET = 'GET'
}

interface Init<T> {
  method?: Methods;
  body?: T;
}

const request = <T>(init: Init<T>): RequestInit => {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    method: init.method || 'GET',
    body: init.body ? JSON.stringify(init.body) : null
  };
};

const http = async <T>(endpoint: string, req: RequestInit): Promise<T> => {
  const url = process.env.API_URL;

  const res = await fetch(`${url}/${endpoint}`, req);
  const body = (await res.json()) as T;

  return body;
};

export const get = async <T>(endpoint: string): Promise<T> =>
  http<T>(endpoint, request({ method: Methods.GET }));

export const post = async <I, D>(endpoint: string, body: I): Promise<D> =>
  http<D>(endpoint, request<I>({ method: Methods.POST, body: body }));
