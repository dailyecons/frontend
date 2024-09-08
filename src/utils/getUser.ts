export function getUser(): string {
  const token = localStorage.getItem('user');

  if (token === null)
    location.href = '/quiz/register';

  return token!;
}
