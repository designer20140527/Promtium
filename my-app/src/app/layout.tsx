import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

// 加载本地字体
const geometosNeue = localFont({
  src: "../../public/Geometos Neue Bold.otf",
  variable: "--font-geometos-neue",
  display: "swap",
});

// 加载Poppins字体
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Promtium",
  description: "An innovative platform that combines AI with blockchain",
  icons: {
    icon: [
      {
        url: '/logo-black.png',
        href: '/logo-black.png',
      }
    ],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/Geometos Neue Bold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="icon" href="/logo-black.png" />
      </head>
      <body
        className={`${geometosNeue.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
