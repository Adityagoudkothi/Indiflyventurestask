import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";



const geistMono = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Indifly Ventures",
  description: "Indifly Ventures is an innovative Indian fintech company offering secure B2B payment, banking, and compliance solutions for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
