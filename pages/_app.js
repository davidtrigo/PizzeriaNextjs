import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline';

function App({ Component, pageProps }){
   
    return (
        <>
        <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> 
            <link rel="icon" href="/favicon.ico" />
            
        </Head>
        <CssBaseline></CssBaseline>
        <Component {...pageProps}/>
        </>
    )
}
export default App;