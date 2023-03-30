import '@/styles/globals.css'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <ThirdwebProvider activeChain={97}
  authConfig={{
    // Set this to your domain to prevent phishing attacks
    domain: "http://localhost:3000",
    
    // The URL of your Auth API
    authUrl: "http://localhost:4000/api/auth",
  }}
  >

    <Component {...pageProps} />
  </ThirdwebProvider>
}
