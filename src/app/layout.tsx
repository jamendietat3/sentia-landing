import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Sentia Vol. 1 – Historias para sentir en grande | eBook infantil',
  description: 'Sentia Vol. 1 es un eBook infantil con 10 cuentos ilustrados de educación emocional para leer en familia con niños de 3 a 8 años. Ayuda a conversar sobre emociones como miedo, enojo, tristeza y alegría. Descarga inmediata PDF.',
  keywords: [
    'cuentos infantiles sobre emociones',
    'educación emocional infantil',
    'cuentos para niños de 3 a 8 años',
    'cuentos para dormir',
    'crianza respetuosa',
    'lectura emocional',
    'cuentos para hablar de emociones',
    'ebook infantil',
    'Sentia',
  ],
  openGraph: {
    title: 'Sentia Vol. 1 – Historias para sentir en grande',
    description: '10 cuentos ilustrados de educación emocional para familias. PDF digital. Descarga inmediata.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Sentia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentia Vol. 1 – Historias para sentir en grande',
    description: '10 cuentos ilustrados de educación emocional para familias. PDF digital.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${nunito.variable} font-sans antialiased`}>
        {/* Google Analytics - reemplazar con tu ID */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" /> */}
        {/* Meta Pixel - reemplazar con tu ID */}
        {/* <Script id="meta-pixel">...</Script> */}
        {children}
      </body>
    </html>
  );
}
