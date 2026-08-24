import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomBar from '@/components/layout/MobileBottomBar';
import AgeGateModal from '@/components/ui/AgeGateModal';
import { FAQS_DATA } from '@/data/faqs';
import { STORE_INFO, STORE_SCHEDULE } from '@/data/storeHours';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://smokeshopfontanaca.com'),
  title: "A1 Smoke Shop | Fontana's Premier Smoke & Glass Shop",
  description:
    'A1 Smoke Shop in Fontana, CA. Unbeatable prices on hand-blown glass, disposable vapes, cigars, and cigarettes with 5-star customer service. Always treated like family.',
  keywords: [
    'A1 Smoke Shop',
    'Smoke Shop Fontana CA',
    'Glass Shop Fontana',
    'Vapes Fontana',
    'Geek Bar Fontana',
    'Cigars Fontana',
    'Hookah Shisha Fontana',
    'Water Pipes',
    'Smoke Shop Near Me',
  ],
  authors: [{ name: 'A1 Smoke Shop' }],
  creator: 'A1 Smoke Shop',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "A1 Smoke Shop | Fontana's Premier Smoke & Glass Shop",
    description:
      'Unbeatable prices on glass, vapes, and cigarettes with 5-star customer service in Fontana, CA. Always treated like family.',
    url: 'https://smokeshopfontanaca.com',
    siteName: 'A1 Smoke Shop Fontana',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "A1 Smoke Shop | Fontana's Premier Smoke & Glass Shop",
    description:
      'Unbeatable prices on glass, vapes, and cigarettes with 5-star customer service in Fontana, CA.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: STORE_INFO.name,
  description: STORE_INFO.tagline,
  telephone: STORE_INFO.phone,
  url: 'https://smokeshopfontanaca.com',
  priceRange: '$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: STORE_INFO.address,
    addressLocality: STORE_INFO.city,
    addressRegion: STORE_INFO.state,
    postalCode: STORE_INFO.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.1068,
    longitude: -117.4350,
  },
  openingHoursSpecification: STORE_SCHEDULE.map((s) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: s.day,
    opens: s.openHour24 < 10 ? '0' + s.openHour24 + ':00' : s.openHour24 + ':00',
    closes: s.closeHour24 < 10 ? '0' + s.closeHour24 + ':' + (s.closeMin === 0 ? '00' : s.closeMin) : s.closeHour24 + ':' + (s.closeMin === 0 ? '00' : s.closeMin),
  })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: STORE_INFO.googleRating.toString(),
    reviewCount: STORE_INFO.reviewCount.toString(),
    bestRating: '5',
    worstRating: '1',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS_DATA.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'scroll-smooth ' + inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans pb-16 md:pb-0 relative min-h-screen flex flex-col justify-between">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AgeGateModal />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MobileBottomBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
