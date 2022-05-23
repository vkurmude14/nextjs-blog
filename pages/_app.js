import '../styles/globals.css'
import Navbar from '../components/navbar'
function MyApp({ Component, pageProps }) {
  // console.log("I am _app.js")
  return <>
  <Navbar/>
    <Component {...pageProps} />
  </>
}

export default MyApp
