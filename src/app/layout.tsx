import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import localFont from 'next/font/local'
import './globals.css'

// We'll load Bricolage via CSS import instead — remove next/font/google entirely
export const metadata: Metadata = {
  title: 'Vaulta — Banking That Feels Like Home',
  description: 'Send money across Africa instantly, earn 12% p.a. on savings, and manage your money in one app. Open an account in 4 minutes.',
  openGraph: {
    title: 'Vaulta — Banking That Feels Like Home',
    images: ['/og-image.png'],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: 'var(--cream)', fontFamily: 'var(--font-body)', margin: 0 }}>
        {children}
      </body>
    </html>
  )
}