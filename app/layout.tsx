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
  'A Little Bit More Trading Limited (ALBM) is a premium sourcing and logistics partner, serving as the parent holding company and supply chain backbone for several ventures, including the flagship subsidiary Two More Glasses (TMG), a leading wine and spirits retailer in Hong Kong. Specialized in enterprise cold-chain facilitation of gourmet perishable goods.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'ALBM Trading Limited | Global Supply Chain & Market Entry Strategy',
  description: pageDescription,
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_HK',
    url: siteUrl,
    siteName: 'ALBM Trading Limited',
    title: 'ALBM Trading Limited | Global Supply Chain & Market Entry Strategy',
    description: pageDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALBM Trading Limited | Global Supply Chain & Market Entry Strategy',
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
