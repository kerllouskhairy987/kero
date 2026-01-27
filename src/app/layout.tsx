import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import AOSProvider from "@/provider/AosProvider";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <Toaster position="bottom-center" reverseOrder={false} />
          <AOSProvider />
        </LanguageProvider>
      </body>
    </html>
  );
};


export const metadata: Metadata = {
  title: {
    template: '%s | Kerolos Khairy',
    default: 'Kerolos Khairy | Frontend Developer',
  },
  description: "Frontend Developer with experience in React, Next.js, TypeScript, and modern UI development.",
  verification: {
    google: '47IwqRN0Ngws4YGHghaE_MsDwQJRg_eQLE5x9mbqG0c',
  },
  applicationName: 'Kerolos Khairy Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Frontend Developer',
    'html',
    'html5',
    'css',
    'css3',
    'Tailwind Css',
    'Bootstrap',
    'Sass',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Prisma ORM',
    'Portfolio'
  ],
  authors: [
    { name: 'Kerolos Khairy', url: 'https://kero11.vercel.app' }
  ],
  creator: 'Kerolos Khairy',
  publisher: 'Kerolos Khairy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL('https://kero11.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      ar: '/ar',
    },
  },
  openGraph: {
    title: 'Kerolos Khairy | Frontend Developer',
    description:
      'Frontend Developer متخصص في React و Next.js وبناء واجهات مستخدم حديثة.',
    url: '/',
    siteName: 'Kerolos Khairy Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Kerolos Khairy Portfolio',
      },
    ],
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Kerolos Khairy | Frontend Developer',
    description:
      'Frontend Developer متخصص في React و Next.js وبناء واجهات مستخدم حديثة.',
    images: ['/og.png'],
  },
};