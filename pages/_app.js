import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session} refetchInterval={3*60}>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </SessionProvider>
  )
}

export default MyApp
