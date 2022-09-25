import { ReactNode } from 'react';
import Head from 'next/head'
import { Footer } from '@/components/ui/Footer'
import { Contact } from '@/components/ui/Contact';
import { NavFeatures } from '@/components/ui/navigation/Nav_Features'
import TagManager from 'react-gtm-module'
import { ILayoutProps } from '@/types/types'
// import ReactGA from 'react-ga';


export default function Layout({ children }: ILayoutProps) {
const tagManagerArgs = {
  gtmId: 'G-DXKFRZ3S9W',
  dataLayerName: 'PageDataLayer'
}
if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio de Navarro Benjamin développeur web Front-End Back-End React Next Typescript" />
        <link rel="icon" href="/icon.svg" />
        <title>Portfolio - Navarro Benjamin</title>
      </Head>

      <NavFeatures />
      <Contact />
      <main role='document' className={`container Main__Wrapper blurOut`}>
        {children}
      </main>
      <Footer />
    </>
  )
}
