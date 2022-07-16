import { useRouter } from 'next/router';
import { useEffect } from 'react';
import client, { clearAuthToken, setAuthToken } from '../api/client';
import { useUserStore } from '../store/user';

export default function useUser(checkToken?: boolean) {
  const { user, login, logout } = useUserStore();
  const router = useRouter();
  const userFetcher = async () => {
    const currentToken = localStorage.getItem('dewsToken');
    if (currentToken) {
      setAuthToken(currentToken);
      try {
        const data = await client.get('/me').then((response) => response);
        login(data);
      } catch (e) {
        clearAuthToken();
        logout();
      }
    }
  };

  useEffect(() => {
    if (checkToken) {
      userFetcher();
    }
  }, [router]);

  return user;
}
