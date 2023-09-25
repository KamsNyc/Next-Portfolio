import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kamel Singh',
  description: 'Web Developer and Designer Based In New York City',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className={inter.className}>
        <main className='sticky top-10 z-50'>
          <Header />
          </main>
          <section className=" mt-[6rem] lg:mt-[9rem]">
        {children}
        </section>
      </body>
    </html>
  )
}
