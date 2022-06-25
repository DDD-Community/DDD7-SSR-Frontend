import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
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
    </QueryClientProvider>
  );
}

export default MyApp;
