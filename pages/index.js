import React from 'react';
import Head from 'next/head';
import ToolBar from '../components/toolbar';




export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzeria David</title>
      </Head>
      <ToolBar></ToolBar>
    </>
  )
}