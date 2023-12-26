import React from 'react'
import { Golos_Text } from 'next/font/google'
import '../globals.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const golosText = Golos_Text({
  weight: ['400', '500', '600'],
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--golos-text',
})

export const metadata = {
  metadataBase: new URL('https://faino-dealer.vercel.app/'), // TODO: change to original
  title: 'FAINO DEALER',
  description: 'Easy way of tech-parts delivery',
}

const RootLayout = ({ children, params: { locale } }) => {
  return (
    <html lang={locale}>
      <body className={golosText.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
