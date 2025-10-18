import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bodo Boats - Proizvodnja čamaca i oprema',
  description: 'Bodo Boats - proizvodnja čamaca, remont i prodaja opreme za čamce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
