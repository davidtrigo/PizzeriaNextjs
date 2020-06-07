import Head from 'next/head'
import User from '../components/user'
import AppBar from '../components/appbar'
export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzeria</title>
      </Head>
      <AppBar/>
    </>
  )
}
