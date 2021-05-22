import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
// Wrapper necessário quando se usa o react-query
import { QueryClientProvider } from 'react-query';
// Ferramenta para facilitar análise e manipulação manual do react-query
import { ReactQueryDevtools } from 'react-query/devtools';

import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { makeServer } from '../services/mirage';
import { queryClient } from '../services/queryClient';

// Inicializando o miragejs
if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider
        /*resetCSS - Remove as estilizações padrão do HTML. True by default */
        theme={theme}
      >
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
