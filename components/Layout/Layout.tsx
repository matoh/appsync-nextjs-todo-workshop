import { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import { Inter } from '@next/font/google';
import Head from 'next/head';
import useColorModeValue from '../../hooks/useColorModeValue';
import HeaderBar from './HeaderBar';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: ReactElement }) {
  const { color } = useColorModeValue();

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name='description' content='Todo App built with NextJs' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <Box maxWidth='68rem' margin='auto' height='100vh' backgroundColor={color('gray.50', 'gray.600')}>
          <HeaderBar />
          <Box p='4' >
            {children}
          </Box>
        </Box>
      </main>
    </>
  );
}
