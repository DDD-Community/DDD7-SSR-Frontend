import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Header } from 'src/domains/shared/components';
import useMediaQuery from 'src/domains/shared/hooks/useMediaQuery';
import useBreakpointResizeHandler from 'src/domains/shared/hooks/useMediaQuery';
import GlobalStyle from 'src/style/GlobalStyle';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useMediaQuery();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
