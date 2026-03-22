import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import 'lenis/dist/lenis.css'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.albmtrading.com'

const pageDescription =
  'A Little Bit More Trading Limited (ALBM) — premium sourcing and cold-chain logistics. Parent holding company for Two More Glasses (TMG). Global supply chain facilitation across Greater China and ASEAN.'

const luxuryTitle = 'ALBM Trading Limited | Global Supply Chain & Market Entry Strategy'

const faviconSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><linearGradient id="s" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e5e7eb"/><stop offset="40%" stop-color="#c4c4c4"/><stop offset="70%" stop-color="#6b7280"/><stop offset="100%" stop-color="#374151"/></linearGradient></defs><rect width="32" height="32" rx="6" fill="#fff"/><path d="M16 3L27 9v12c0 7.5-4.5 12-11 12S5 28.5 5 21V9l11-6Z" fill="url(#s)" stroke="#6b7280" stroke-width="0.4"/><path d="M16 10l5 3v6c0 3.5-1.8 6-5 6.2-3.2-.2-5-2.7-5-6.2v-6l5-3Z" fill="#f9fafb" opacity="0.4"/><text x="16" y="21.5" text-anchor="middle" fill="#111827" font-family="Georgia,serif" font-size="11" font-weight="700">A</text></svg>'

const faviconDataUri =
  'data:image/svg+xml,' + encodeURIComponent(faviconSvg.replace(/\s+/g, ' '))

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: luxuryTitle,
  description: pageDescription,
  openGraph: {
    type: 'website',
    locale: 'en_HK',
    url: siteUrl,
    siteName: 'ALBM Trading Limited',
    title: luxuryTitle,
    description: pageDescription,
    images: [],
  },
  twitter: {
    card: 'summary',
    title: luxuryTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#albm`,
      name: 'A Little Bit More Trading Limited',
      alternateName: ['ALBM Trading Limited', 'ALBM'],
      description: pageDescription,
      url: siteUrl,
      subOrganization: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#tmg`,
      },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#tmg`,
      name: 'Two More Glasses',
      alternateName: 'TMG',
      parentOrganization: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#albm`,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={faviconDataUri} type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
