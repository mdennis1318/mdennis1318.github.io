import type { Metadata } from "next";
import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';

import Layout from '../components/layout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matthew Dennis Portfolio",
  description: "A personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Matthew Dennis Portfolio</title>
        <meta name="description" content="A personal portfolio website" />
      </Head>
      <body>
        <Layout children={children} geistSans={geistSans} geistMono={geistMono} />
      </body>
    </html>
  );
}
