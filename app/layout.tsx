import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

export const inter = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brain Chat',
  description: 'Pergunte o que quizer para a inteligência artificial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <header>
      <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
      </header>
      <body className={inter.className}><main className='h-full text-white'>{children}</main></body>
    </html>
  )
}
