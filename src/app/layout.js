// app/layout.js or layout.js (depending on your Next.js version)
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rayan Merhi',
  description: 'Portfolio Rayan merhi for a better meta data and SEO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ray_logo.png" sizes="512x512"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}