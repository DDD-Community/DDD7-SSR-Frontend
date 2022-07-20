import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Loading } from 'src/domains/shared/components';

interface QueryParams {
  token: string;
  refreshToken: string;
}

const setLoginWithTokens = ({ token, refreshToken }: QueryParams) => {
  localStorage.setItem('dewsToken', token);
  localStorage.setItem('dewsRefreshToken', refreshToken);
};

const LoginCallback = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { token, refreshtoken: refreshToken } = router.query;

      setLoginWithTokens({ token, refreshToken } as QueryParams);

      router.replace('/');
    }
  }, [router]);

  return <Loading />;
};

export default LoginCallback;
