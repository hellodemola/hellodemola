import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { IRootLayout } from '@/types/home.types'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '500'] })

export const metadata: Metadata = {
  title: 'Ademola Onasoga | Hellodemola',
  description: 'Ademola Onasoga Official website',
}

export default function RootLayout({children}: IRootLayout) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-2xl mb-20 flex flex-col md:flex-row mx-4 md:mt-8 lg:mx-auto`}>
        <main className=" p-24 flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          </main>
      </body>
      <GoogleAnalytics gaId="G-CDNJ9FFDYV" /> 
    </html>
  )
}
