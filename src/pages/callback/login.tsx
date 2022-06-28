import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useOnUser } from 'src/domains/shared/hooks/useOnUser';

interface QueryParams {
  token: string;
  refreshToken: string;
}

const LoginCallback = () => {
  const router = useRouter();
  const [loginWithTokens] = useOnUser();

  useEffect(() => {
    if (router.isReady) {
      const { token, refreshtoken: refreshToken } = router.query;
      loginWithTokens({ token, refreshToken } as QueryParams);

      router.push('/');
    }
  }, [router]);

  return <h1>Loading...</h1>;
};

export default LoginCallback;
