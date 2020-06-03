import Head from 'next/head'
//const fetcher = url => fetch(url).then(r => r.json())
function App({ Component, pageProps }){
    //const {data,error} = useSWR('/api/validators',fetcher)
    //if(!data) return '...loading'
    return (
        <>
        <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
        <Component {...pageProps}/>
        </>
        /*
        <Validators.Provider value = {data}>
            <Component {...pageProps}/>
        </Validators.Provider>
        */
    )
}
export default App;