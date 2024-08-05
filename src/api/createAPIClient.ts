const makeGetRequest =
  (baseURL: string) =>
  (path: string, headers = {}) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    return fetch(`${baseURL}${path}`, options);
  };

const makePostRequest =
  (baseURL: string) =>
  <Body = unknown>(path: string, body: Body, headers = {}) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    };

    return fetch(`${baseURL}${path}`, options);
  };

const makePutRequest =
  (baseURL: string) =>
  <Body = unknown>(path: string, body: Body, headers = {}) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    };

    return fetch(`${baseURL}${path}`, options);
  };

const makePatchRequest =
  (baseURL: string) =>
  (path: string, body: Body, headers = {}) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    };

    return fetch(`${baseURL}${path}`, options);
  };

const makeDeleteRequest =
  (baseURL: string) =>
  (path: string, headers = {}) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    return fetch(`${baseURL}${path}`, options);
  };

export const createAPIClient = (baseURL = '') => {
  return {
    get: makeGetRequest(baseURL),
    post: makePostRequest(baseURL),
    put: makePutRequest(baseURL),
    patch: makePatchRequest(baseURL),
    delete: makeDeleteRequest(baseURL),
  };
};
