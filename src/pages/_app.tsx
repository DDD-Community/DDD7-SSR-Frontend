import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import useMediaQuery from 'src/domains/shared/hooks/useMediaQuery';
import { usePreserveScroll } from 'src/domains/shared/hooks/usePreserveScroll';
import useUser from 'src/domains/shared/hooks/useUser';
import GlobalStyle from 'src/style/GlobalStyle';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useMediaQuery();
  usePreserveScroll();
  useUser(true);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
