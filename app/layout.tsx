import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ThemeProvider from "./providers/themeProvider";
import Navbar from "@/components/navbar/Navbar";
import ContextProvider from "./providers/ContextProvider";
import { Toaster } from "react-hot-toast";
import ScrollRestore from "@/components/ScrollRestore";

const font = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "ShopSpectrum - Home",
  description:
    "Welcome to ShopSpectrum - Your Ultimate Destination for shoping online. Explore a diverse range of high-quality products and more. Shop now for a seamless and delightful shopping journey!",
  keywords:
    "Welcome to ShopSpectrum - Your Ultimate Destination for shoping online. Explore a diverse range of high-quality products and more. Shop now for a seamless and delightful shopping journey!",
  viewport: "width=device-width, initial-scale=1",
  publisher: "Vercel",
  icons: "/apple-touch-icon.png",
  creator: "Ibrahim Omar",
  appleWebApp: {
    capable: true,
    title: "ShopSpectrum",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: `ShopSpectrum`,
    description:
      "Your Ultimate Destination for shoping online. Explore a diverse range of high-quality products and more. Shop now for a seamless and delightful shopping journey!",
    type: "website",
  },
  authors: [
    {
      name: "Ibrahim Omar",
      url: "https://www.linkedin.com/in/ibrahim-omar-883156253/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white dark:bg-neutral-800`}>
        <main>
          <ContextProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Navbar />
              {children}
              <Toaster />
              <ScrollRestore />
            </ThemeProvider>
          </ContextProvider>
        </main>
      </body>
    </html>
  );
}
