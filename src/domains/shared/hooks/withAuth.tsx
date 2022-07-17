import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import client, { setAuthToken } from '../api/client';

const withAuth = (WrappedComponent: any) => {
  // eslint-disable-next-line react/display-name
  return (props: JSX.IntrinsicAttributes) => {
    if (typeof window !== 'undefined') {
      const [verified, setVerified] = useState<boolean>(false);
      const Router = useRouter();

      const verifyToken = async (accessToken: string | null) => {
        try {
          setAuthToken(accessToken);
          await client.get('/me');
          setVerified(true);
        } catch (e) {
          console.log(e);
          Router.replace('/');
        }
      };

      useEffect(() => {
        const accessToken = localStorage.getItem('dewsToken');

        if (!accessToken) {
          Router.replace('/');
        } else {
          verifyToken(accessToken);
        }
      }, []);

      if (verified) {
        return <WrappedComponent {...props} />;
      }
    }

    return null;
  };
};

export default withAuth;
