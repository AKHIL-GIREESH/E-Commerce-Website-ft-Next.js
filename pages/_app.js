import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/hf.css'

function MyApp({ Component, pageProps }) {
  if (Component.onlyFooter){
    return Component.onlyFooter(<Component {...pageProps} />)
  }
  
  return(
  <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
)}

export default MyApp
