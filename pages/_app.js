import { Provider } from 'react-redux';
import { useStore } from '../store';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import '../public/css/animate.min.css';
import '../public/css/bootstrap.min.css';
import customTheme from '../components/Shared/extendTheme'

import '../public/css/boxicons.min.css';


import '../public/css/fontawesome.min.css';
import '../public/css/meanmenu.min.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import Layout from '../components/Layout/Layout';
import GoTop from '../components/Shared/GoTop';

const colors = {
  brand: {
    1: '#1a365d',
  },
}

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <ChakraProvider theme={customTheme}>
      <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <GoTop/>
      </Layout>
    </Provider>
    </ChakraProvider>
  );
}
