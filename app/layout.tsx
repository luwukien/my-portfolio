import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { GeistPixelGrid } from 'geist/font/pixel'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Chi Kien Luu | AI Engineering Portfolio',
  description:
    'Personal portfolio of Chi Kien Luu (luwukien), an AI Engineering Intern and student at FPT University. Showcasing machine learning models, optimized neural networks, and distributed inference components.',
  keywords: [
    'Chi Kien Luu',
    'luwukien',
    'AI Engineering Portfolio',
    'Deep Learning',
    'NLP',
    'Computer Vision',
    'FPT University',
    'Software Engineering Portfolio',
    'Brutalist Portfolio',
    'Next.js Portfolio',
    'Framer Motion Portfolio',
    'Developer Portfolio',
  ],
  authors: [{ name: 'Chi Kien Luu' }],
  creator: 'Chi Kien Luu',
  publisher: 'Chi Kien Luu',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Chi Kien Luu | AI Engineering Portfolio',
    description:
      'Personal portfolio of Chi Kien Luu (luwukien), an AI Engineering Intern and student at FPT University. Built with Next.js 16, Tailwind CSS, and Framer Motion.',
    siteName: 'luwukien Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chi Kien Luu | AI Engineering Portfolio',
    description:
      'Personal portfolio of Chi Kien Luu (luwukien), an AI Engineering Intern and student at FPT University.',
    creator: '@luwukien',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: '#F2F1EA',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${GeistPixelGrid.variable}`} suppressHydrationWarning>
      <body className="font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
