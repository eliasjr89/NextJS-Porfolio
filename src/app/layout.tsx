import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { DashboardLayoutProps } from "@/types/types";
import { Analytics } from "@vercel/analytics/next";
import TopMenu from "../components/navbar/TopMenu";
import Footer from "../components/footer/Footer";
import { Vortex } from "../components/vortex/vortex";
import { Providers } from "@/components/Providers";
import { SkipNav } from "@/components/accessibility/SkipNav";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { PWAInstaller } from "@/components/PWAInstaller";

export const metadata: Metadata = {
  metadataBase: new URL('https://eliasjiminian.vercel.app'),
  title: {
    default: 'Elias Jiminián | Full Stack Developer',
    template: '%s | Elias Jiminián'
  },
  description: 'Full Stack Developer especializado en React, Next.js y TypeScript. Portfolio de proyectos y experiencia profesional.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript',
    'Web Development',
    'Software Engineer',
    'Elias Jiminián'
  ],
  authors: [{ name: 'Elias Jiminián', url: 'https://eliasjiminian.vercel.app' }],
  creator: 'Elias Jiminián',
  publisher: 'Elias Jiminián',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: 'https://eliasjiminian.vercel.app',
    title: 'Elias Jiminián | Full Stack Developer',
    description: 'Full Stack Developer especializado en React, Next.js y TypeScript. Portfolio de proyectos y experiencia profesional.',
    siteName: 'Elias Jiminián Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Elias Jiminián Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elias Jiminián | Full Stack Developer',
    description: 'Full Stack Developer especializado en React, Next.js y TypeScript',
    images: ['/og-image.png'],
    creator: '@eliasjiminian',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Full Stack Developer specialized in frontend development."
        />
      </head>

      <body className="antialiased bg-background text-foreground flex flex-col min-h-screen">
        <PWAInstaller />
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ScrollProgress />
            <SkipNav />
            <TopMenu />
            <Analytics />

            <div className="fixed inset-0 z-[-1]">
              <Vortex backgroundColor="transparent" className="w-full h-full" />
            </div>

            <main id="main-content" className="relative flex-grow container mx-auto">
              {children}
            </main>

            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
