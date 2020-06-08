import Head from 'next/head'
import User from '../components/user'
import AppBar from '../components/appbar'
import Layout from '../components/layout'
export default function Ingredients() {
  return (
    <>
      <Head>
        <title>Pizzeria</title>
      </Head>
      <Layout>
        <div>Estas en Ingredientes</div>
      </Layout>
    </>
  )
}