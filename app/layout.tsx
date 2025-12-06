import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LumiLearn | Assessment",
  description:
    "A modern e-learning platform built with Next.js 16, featuring course discovery, shopping cart functionality, and a seamless checkout experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <body className={`${geistSans.variable} ${inter.variable}  antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
