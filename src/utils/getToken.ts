export function getAdminToken(): string {
  const token = sessionStorage.getItem('token');

  if (token === null) {
    alert('Session expired! Please log in again!');
    location.href = '/admin/login';
  }

  return token!;
}
