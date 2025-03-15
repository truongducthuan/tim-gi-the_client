import { GATEWAYS } from '@/shares/configs/appConfig'
import { generateApiUrl } from '@/shares/utils/url'

// Make request
interface RequestParams {
  customHeaders?: Record<string, string>;
  [key: string]: any;
}

const makeRequest = async (requestMethod: string, url: string, params: RequestParams = {}) => {
  const { customHeaders, ...otherParams } = params;

  const accessToken = localStorage.getItem('access_token');

  const headers: Record<string, string> = {
    'Content-Type': 'application/json; charset=utf-8',
    ...customHeaders
  };

  if (accessToken) {
    headers['User-Access-Token'] = accessToken;
  }

  const response = await fetch(url, {
    method: requestMethod,
    headers,
    credentials: 'include',
    ...otherParams,
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return response;
}

// Send GET request
interface RequestOptions {
  gateway?: string;
}

interface RequestParams {
  customHeaders?: Record<string, string>;
}

export const GET = async (endpoint = '/', params = {}, options: RequestOptions = {}) => {
  const { gateway = GATEWAYS.MOON } = options;
  const url = await generateApiUrl({ gateway, endpoint });
  const response = await makeRequest('GET', url, params);

  return response.json();
};

// Send POST request
export const POST = async (endpoint = '/', params: RequestParams = {}, options: RequestOptions = {}) => {
  const { gateway = GATEWAYS.MOON } = options;
  const { body = {}, ...otherParams } = params;
  const url = await generateApiUrl({ gateway, endpoint });

  const response = await makeRequest(
    'POST',
    url,
    {
      body: body instanceof FormData ? body : JSON.stringify(body),
      ...otherParams,
    }
  );

  return response.json();
};

// Specialized function for file uploads
export const UPLOAD = async (endpoint = '/', formData: FormData, options: RequestOptions = {}) => {
  const { gateway = GATEWAYS.MOON } = options;
  const url = await generateApiUrl({ gateway, endpoint });

  const accessToken = localStorage.getItem('accessToken');

  const headers = {
    ...(accessToken && { 'User-Access-Token': accessToken })
  };

  const response = await fetch(url, {
    method: 'POST',
    headers,
    credentials: 'include',
    body: formData
  });

  if (!response.ok) {
    throw new Error('Upload failed');
  }

  return response.json();
};