import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'ALBM Trading Limited | Global Supply Chain & Market Entry Strategy',
  description: 'A Little Bit More Trading Limited (ALBM) is a premium sourcing and logistics partner, serving as the parent holding company and supply chain backbone for several ventures, including the flagship subsidiary Two More Glasses (TMG), a leading wine and spirits retailer in Hong Kong. Specialized in enterprise cold-chain management for high-value perishable goods.',
  generator: 'v0.app',
  keywords: ['ALBM Trading', 'supply chain', 'cold-chain logistics', 'Two More Glasses', 'TMG', 'Hong Kong', 'wine import', 'ASEAN', 'Greater China', 'premium sourcing'],
  authors: [{ name: 'A Little Bit More Trading Limited' }],
  creator: 'ALBM Trading',
  publisher: 'A Little Bit More Trading Limited',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_HK',
    url: 'https://albmtrading.com',
    siteName: 'ALBM Trading Limited',
    title: 'ALBM Trading Limited | Global Supply Chain & Market Entry Strategy',
    description: 'A Little Bit More Trading Limited (ALBM) is a premium sourcing and logistics partner, serving as the parent holding company and supply chain backbone for several ventures, including the flagship subsidiary Two More Glasses (TMG), a leading wine and spirits retailer in Hong Kong. Specialized in enterprise cold-chain management for high-value perishable goods.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ALBM Trading Limited - Global Supply Chain Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALBM Trading Limited | Global Supply Chain & Market Entry Strategy',
    description: 'A Little Bit More Trading Limited (ALBM) is a premium sourcing and logistics partner, serving as the parent holding company and supply chain backbone for several ventures, including the flagship subsidiary Two More Glasses (TMG), a leading wine and spirits retailer in Hong Kong.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
}

// JSON-LD Schema for Organization
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'A Little Bit More Trading Limited',
  alternateName: 'ALBM Trading',
  url: 'https://albmtrading.com',
  logo: 'https://albmtrading.com/logo.png',
  description: 'Premium sourcing and logistics partner serving as the parent holding company for Two More Glasses (TMG) and other ventures.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 1001, World Interests Building, 8 Tsun Yip Lane',
    addressLocality: 'Kwun Tong',
    addressRegion: 'Kowloon',
    postalCode: '',
    addressCountry: 'HK',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@albmtrading.com',
    contactType: 'customer service',
  },
  sameAs: [],
  parentOrganization: null,
  subOrganization: {
    '@type': 'Organization',
    name: 'Two More Glasses',
    alternateName: 'TMG',
    description: 'Leading premium wine and spirits retailer in Hong Kong',
    url: 'https://twomoreglasses.com',
  },
  areaServed: ['Hong Kong', 'Greater China', 'ASEAN'],
  knowsAbout: ['Supply Chain Management', 'Cold-Chain Logistics', 'Wine Import', 'Premium Goods Sourcing'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
