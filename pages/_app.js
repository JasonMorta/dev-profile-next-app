import Script from 'next/script';
import '../styles/globals.css'

//Google Analytics tracking script

function MyApp({ Component, pageProps}) {
  return ( 
  <>
      <Script
      id="google-manager"
      strategy='lazyOnload'
      src={"https://www.googletagmanager.com/gtag/js?id=G-EVKQ64QWY7"}
      />
  
      <Script
      id="window-data"
      strategy='lazyOnload'>
        {
          `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EVKQ64QWY7', {page_path: window.location.pathname})`
        }
      </Script>

    <Component {...pageProps} />
  </>
  );
}

export default MyApp;