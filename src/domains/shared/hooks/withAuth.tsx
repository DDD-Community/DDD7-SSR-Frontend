import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import client, { setAuthToken } from '../api/client';

const withAuth = (WrappedComponent: any) => {
  // eslint-disable-next-line react/display-name
  return (props: JSX.IntrinsicAttributes) => {
    if (typeof window !== 'undefined') {
      const [verified, setVerified] = useState<boolean>(false);
      const Router = useRouter();

      const accessToken = localStorage.getItem('dewsToken');

      if (!accessToken) {
        Router.replace('/');
        return null;
      }

      const verifyToken = async () => {
        try {
          setAuthToken(accessToken);
          await client.get('/me');
          setVerified(true);
        } catch (e) {
          console.log(e);
          localStorage.removeItem('dewsToken');
          localStorage.removeItem('dewsRefreshToken');
          Router.replace('/');
        }
      };

      useEffect(() => {
        verifyToken();
      }, []);

      if (verified) {
        return <WrappedComponent {...props} />;
      } else {
        return null;
      }
    }

    return null;
  };
};

export default withAuth;
