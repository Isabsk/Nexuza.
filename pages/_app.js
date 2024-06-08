import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import GAScript from '@/components/analytics/GoogleAnalytics.js'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <GoogleTagManager gtmId="GTM-KH2BK3MQ" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <GAScript />
      <GoogleAnalytics gaId="G-THFCERS795" />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
