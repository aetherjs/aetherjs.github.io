import type { Metadata } from "next";
import { Karla, Inconsolata } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello Stranger!",
  description: "Vlad's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='h-screen overflow-hidden'>
        <Header />
        {children}
      </body>
    </html>
  );
}
