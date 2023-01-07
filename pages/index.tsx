import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Text } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name='description' content='Todo App built with NextJs' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <Text>NextJs</Text>
      </main>
    </>
  );
}
