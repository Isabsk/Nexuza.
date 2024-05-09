import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
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
            content="frame-src 'self' https://embeds.beehiiv.com;"
          />

          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#082f49"
          />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body className="!overflow-visible bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
