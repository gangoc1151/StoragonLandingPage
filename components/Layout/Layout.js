import Head from 'next/head';
import { useRouter } from 'next/router';

//top header
import TopHeader from './TopHeader';

//navbar
import Navbar from './Navbar';
import NavbarTwo from './NavbarTwo';

//footer
import Footer from './Footer';
import { Box } from '@chakra-ui/react';

import SocialBar from './SocialBar';

const Layout = ({ children }) => {
  
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Head>
        <title>Storagon - Web3 Decentralized Cloud Storage</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta
          name='Storagon'
          content='Decentralized Cloud Service'
        />
        <link rel='canonical' href='https://novis-react.envytheme.com'></link>
      </Head>

      {/* {pathname === '/' ? <TopHeader /> :''} */}
      {pathname === '/index-2' ? <NavbarTwo /> : <Navbar />}
      <SocialBar/>

      {children}
      <Footer />
    </>
  );
};

export default Layout;
