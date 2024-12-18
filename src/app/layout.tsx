import type { Metadata } from "next";
import "./globals.css";
import {  Pacifico, Lexend_Deca,Lato } from 'next/font/google';
import ModalHandler from "@/modalHandler";


const monserrat = Pacifico({
  variable: '--font-monserrat',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const Lexend = Lexend_Deca({
  variable: '--font-lexend',
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
})

const SansNarow = Lato({
  variable: '--font-sans-narow',
  subsets: ['latin'],
  weight: ['400','700','900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "TravelYouuu",
  description: "Your Adventure, Your Way with TravelYouuu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${monserrat.variable} ${SansNarow.variable} ${Lexend.variable}`}>
      <head>
        {/* Menambahkan favicon */}
        <link rel="icon" href="/img/favicon.ico" />
      </head>
      <body
        className={`font-desc antialiased dark:text-black`}
      >
        <ModalHandler />
        {children}
      </body>
    </html>
  );
}
