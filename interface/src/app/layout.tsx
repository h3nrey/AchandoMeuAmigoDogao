import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Achando meu primo dogão",
  description: 'usando djikistra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="page__header__wrapper">
          <Link href="/">
            <header id='page__header'>Achando meu primo dogão</header>
          </Link>
          <span>Usando Djikistra</span>
        </div>
        {children}
      </body>
    </html>
  )
}
