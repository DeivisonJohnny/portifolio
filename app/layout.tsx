import type { Metadata } from "next";
import "./globals.css";

import {Sora} from 'next/font/google'

const sora = Sora({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
      style={{backgroundColor: '#0f0715', height: '100%', scrollBehavior: "smooth"}} 
      className={`${sora.className} dark flex items-center flex-col relative custom-background backdrop-blur-sm overflow-x-hidden scrollSuave`}
            >
        {children}
      </body>
    </html>
  );
}
