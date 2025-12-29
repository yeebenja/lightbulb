'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from 'react-redux' // import Provider for store
import { store } from './store/store'  // import the actual store
// import "./globals.css";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}> { /* use Provider to pass down the Redux store for the whole application */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
