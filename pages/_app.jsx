import Navigation from '../components/layout/Navigation'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
  size: 2,
  color: '#3B82F6',
  className: 'bar-of-progress',
  delay: 100,
})

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', progress.start)
    router.events.on('routeChangeComplete', progress.finish)
    router.events.on('routeChangeError', progress.finish)

    return () => {
      router.events.off('routeChangeStart', progress.start)
      router.events.off('routeChangeComplete', progress.finish)
      router.events.off('routeChangeError', progress.finish)
    }
  }, [router])

  useEffect(() => {
    document.body.classList.add('bg-white')
    document.body.classList.add('dark:bg-neutral-900')
  })

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Manrope:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider attribute="class">
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </ThemeProvider>
    </>
  )
}

export default MyApp
