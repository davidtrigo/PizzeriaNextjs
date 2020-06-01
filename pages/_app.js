//import useSWR from 'swr'
//import Validators from '../components/validatorcontext'
const fetcher = url => fetch(url).then(r => r.json())
function App({ Component, pageProps }){
    //const {data,error} = useSWR('/api/validators',fetcher)
    //if(!data) return '...loading'
    return (
        <Component {...pageProps}/>
        /*
        <Validators.Provider value = {data}>
            <Component {...pageProps}/>
        </Validators.Provider>
        */
    )
}
export default App;