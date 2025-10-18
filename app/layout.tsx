import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BODO Boats | Proizvodnja čamaca BODO 540 | CE sertifikovani čamci',
  description: 'BODO Boats - Profesionalna proizvodnja čamaca BODO 540. CE sertifikovani čamci za pecanje, rekreaciju i porodične avanture. Izuzetna plovnost, moderan dizajn, 12 vazdušnih komora. Prodaja opreme za čamce. Dostupno u Srbiji.',
  keywords: 'bodo boats, čamac, čamci, bodo 540, pecanje, ribolov, plovilo, čamac za pecanje, čamac za ribolov, čamac srbija, gumeni čamac, pneumatski čamac, CE sertifikat, DNV, čamac sa motorom, nautika, vodena rekreacija, prodaja čamaca',
  authors: [{ name: 'Bodo Boats' }],
  creator: 'Bodo Boats',
  publisher: 'Bodo Boats',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bodoboats.com'),
  alternates: {
    canonical: '/',
    languages: {
      'sr': '/',
      'en': '/',
      'ru': '/',
      'de': '/',
    },
  },
  openGraph: {
    title: 'BODO Boats | Proizvodnja čamaca BODO 540 | CE sertifikovani čamci',
    description: 'Profesionalna proizvodnja čamaca BODO 540. CE sertifikovani čamci za pecanje i rekreaciju. Izuzetna plovnost, moderan dizajn.',
    url: 'https://bodoboats.com',
    siteName: 'BODO Boats',
    images: [
      {
        url: '/assets/bodo-logo-green.png',
        width: 1200,
        height: 630,
        alt: 'BODO Boats Logo',
      },
    ],
    locale: 'sr_RS',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BODO Boats | Proizvodnja čamaca BODO 540',
    description: 'CE sertifikovani čamci za pecanje i rekreaciju. Profesionalna proizvodnja.',
    images: ['/assets/bodo-logo-green.png'],
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
    icon: [
      { url: '/favicon.ico' },
      { url: '/assets/bodo-logo-green.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/bodo-logo-green.png' },
    ],
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#4ea262" />
        <link rel="icon" href="/assets/bodo-logo-green.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/bodo-logo-green.png" />

        {/* JSON-LD Schema.org structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'BODO Boats',
              image: 'https://bodoboats.com/assets/bodo-logo-green.png',
              '@id': 'https://bodoboats.com',
              url: 'https://bodoboats.com',
              telephone: '+381638087748',
              email: 'bodoboats@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'RS',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 45.1784208,
                longitude: 19.9751931,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '08:00',
                closes: '17:00',
              },
              sameAs: [
                'https://www.facebook.com/profile.php?id=100076453789362',
                'https://www.instagram.com/bodo_boats',
              ],
              priceRange: '$$',
              description: 'Profesionalna proizvodnja čamaca BODO 540. CE sertifikovani čamci za pecanje, rekreaciju i porodične avanture.',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'BODO 540',
              image: 'https://bodoboats.com/assets/gallery/bodo540/gallery-540-001.png',
              description: 'CE sertifikovan čamac BODO 540. Dužina 5.65m, širina 1.56m, dubina 0.65m. 12 vazdušnih komora, max 6 osoba, max snaga motora 50ks.',
              brand: {
                '@type': 'Brand',
                name: 'BODO Boats',
              },
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                priceCurrency: 'EUR',
                seller: {
                  '@type': 'Organization',
                  name: 'BODO Boats',
                },
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '1',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
