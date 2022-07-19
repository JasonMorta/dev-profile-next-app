import Script from 'next/script';
import '../styles/globals.css'

//Google Analytics tracking script

function MyApp({ Component, pageProps}) {
  return ( 
  <>
      <Script
      strategy='lazyOnload'
      src={"https://www.googletagmanager.com/gtag/js?id=G-EVKQ64QWY7"}/>
  
      <Script
      strategy='lazyOnload'>
        {
          `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EVKQ64QWY7')`
        }
      </Script>

    <Component {...pageProps} />
  </>
  );
}

export default MyApp;