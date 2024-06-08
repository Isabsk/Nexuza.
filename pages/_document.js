import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com giscus.app; connect-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline';"
          />
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms giscus.app; connect-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline';"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KH2BK3MQ');
            `,
            }}
          />
          <GoogleTagManager gtmId="GTM-KH2BK3MQ" />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "mmzmim8tix");
              `,
            }}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/favicons/favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicons/safari-pinned-tab.png"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#eee" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#0ea5e9"
          />
          <meta
            http-equiv="Content-Security-Policy"
            content="frame-src 'self' https://embeds.beehiiv.com/"
          />
          <meta
            httpEquiv="Content-Security-Policy"
            content="
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app https://www.googletagmanager.com https://plausible.io;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
            "
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#082f49"
          />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-THFCERS795"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-THFCERS795');
              `,
            }}
          />
        </Head>
        <body
          style={{ overflowX: 'hidden' }}
          className="!overflow-x-hidden !overflow-y-visible bg-white text-black antialiased dark:bg-gray-900 dark:text-white"
        >
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KH2BK3MQ"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
          <GoogleAnalytics gaId="G-THFCERS795" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
