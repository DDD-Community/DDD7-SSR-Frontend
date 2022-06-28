import { useQuery } from 'react-query';
import client, { setAuthToken } from '../api/client';

const userFetcher = () => {
  const currentToken = localStorage.getItem('dewsToken');
  if (currentToken) setAuthToken(currentToken);

  return client.get('/me').then((response) => response);
};

export default function useUser() {
  const { isLoading, data } = useQuery('me', userFetcher);

  return [isLoading, data];
}
