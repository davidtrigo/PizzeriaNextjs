import Head from 'next/head'
import User from '../components/user'
import Layout from '../components/layout'
export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzeria</title>
      </Head>
      <Layout>
        <div><h1>Estas en Pizzas</h1></div>
      </Layout>
    </>
  )
}
