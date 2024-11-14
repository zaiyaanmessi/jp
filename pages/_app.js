import "../public/assets/css/style.css";
import "../styles/globals.css";
import { useEffect } from "react";



export default function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
    useEffect(() => {
        require("../public/assets/js/bootstrap.bundle.min.js");
    }, []);

    return (
        
          <Component {...pageProps} />
       
    )
    
}


