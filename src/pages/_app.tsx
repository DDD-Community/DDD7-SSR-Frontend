import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import useBreakpointResizeHandler from 'src/domains/shared/hooks/useBreakpointResizeHandler';
import GlobalStyle from 'src/style/GlobalStyle';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useBreakpointResizeHandler();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
