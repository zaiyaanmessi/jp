import "../public/assets/css/style.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <SignedOut>
      
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default MyApp