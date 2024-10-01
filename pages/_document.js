import Document, { Html, Head, Main, NextScript } from 'next/document'
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
            name="google-adsense-account"
            content="ca-pub-3585939239731411"
          />
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms giscus.app; connect-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline';"
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
        </Head>
        <body
          style={{ overflowX: 'hidden' }}
          className="!overflow-x-hidden !overflow-y-visible bg-white text-black antialiased dark:bg-gray-900 dark:text-white"
        >
          <Main />
          <NextScript />
        </body>
        <GoogleAnalytics gaId="G-THFCERS795" />
      </Html>
    )
  }
}

export default MyDocument
