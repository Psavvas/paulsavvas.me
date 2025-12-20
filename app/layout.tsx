import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap', // Prevent font loading from blocking render
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap', // Prevent font loading from blocking render
});

export const metadata: Metadata = {
  title: 'Paul Savvas',
  description:
    'Personal website of Paul Savvas - Student, Engineer, Developer and Leader',
  metadataBase: new URL('https://paulsavvas.me'),
  openGraph: {
    title: 'Paul Savvas',
    description: 'Student, Engineer, Developer and Leader',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paul Savvas',
    description: 'Student, Engineer, Developer and Leader',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
        >
          <div className="bg-amber-500 px-4 py-3 text-center text-sm font-medium text-amber-950 dark:bg-amber-600 dark:text-amber-50">
            <p>
              🚧 This site has just been migrated to Next.js. I'm currently in the process of updating content across the site. Some information may not be up-to-date yet. Questions? The{' '}
              <a href="/contact" className="underline hover:text-amber-900 dark:hover:text-amber-100">
                contact page
              </a>{' '}
              is ready to go.
            </p>
          </div>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
