import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shaina Gera — AI Engineer & Full Stack Developer',
  description: 'Computer Engineering student at TIET building intelligent systems with AI, Machine Learning, and Full Stack Engineering. Specializing in LLMs, RAG, and scalable software systems.',
  keywords: ['AI Engineer', 'Full Stack Developer', 'Machine Learning', 'LangChain', 'RAG', 'Next.js', 'React', 'MERN Stack'],
  authors: [{ name: 'Shaina Gera', url: 'https://github.com/Shainaa17' }],
  creator: 'Shaina Gera',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shainagera.dev',
    title: 'Shaina Gera — AI Engineer & Full Stack Developer',
    description: 'Building intelligent systems with AI, Data, and Full Stack Engineering.',
    siteName: 'Shaina Gera Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shaina Gera — AI Engineer & Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaina Gera — AI Engineer & Full Stack Developer',
    description: 'Building intelligent systems with AI, Data, and Full Stack Engineering.',
    images: ['/og-image.png'],
  },
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body className="bg-bg text-gray-100 font-sans antialiased">
        <div id="scroll-progress" aria-hidden="true" />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#111827',
              color: '#F9FAFB',
              border: '1px solid #1F2937',
              borderRadius: '12px',
              fontSize: '14px',
            },
          }}
        />
      </body>
    </html>
  )
}
