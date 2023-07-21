import './globals.css'
import type { Metadata } from 'next'

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
      <head>
      <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16" />
      </head>
      <body><main className='h-full text-white'>{children}</main></body>
    </html>
  )
}
