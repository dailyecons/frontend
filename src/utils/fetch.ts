const API_URL = 'https://dailyecons.onrender.com/api';

export function saveAdminToken(token: string) {
  sessionStorage.setItem('token', token);
}

export function adminFetch(url: string, init?: RequestInit): Promise<Response> {
  const Authorization = sessionStorage.getItem('token');
  if (Authorization === null) {
    alert('Session expired! Please log in again!');
    location.href = '/admin/login';
    return null!;
  }

  if (typeof init === 'undefined')
    return fetch(API_URL + url, {
      headers: { Authorization }
    });

  if (typeof init.headers === 'undefined')
    return fetch(API_URL + url, {
      headers: { Authorization },
      ...init
    });

  // @ts-ignore
  init.headers.Authorization = Authorization;
  return fetch(API_URL + url, init);
}

export function normalFetch(url: string, init?: RequestInit) {
  return fetch(API_URL + url, init);
}
