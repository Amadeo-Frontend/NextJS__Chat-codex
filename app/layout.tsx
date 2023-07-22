import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chat-Codex',
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
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body><main className='h-full text-white'>{children}</main></body>
    </html>
  )
}
