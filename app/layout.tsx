import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ThemeProvider from "./providers/themeProvider";
import Navbar from "@/components/navbar/Navbar";
import ContextProvider from "./providers/ContextProvider";
import { Toaster } from "react-hot-toast";

const font = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "ShopSpectrum - Home",
  description:
    "Welcome to ShopSpectrum - Your Ultimate Destination for shoping online. Explore a diverse range of high-quality products and more. Shop now for a seamless and delightful shopping journey!",
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
            </ThemeProvider>
          </ContextProvider>
        </main>
      </body>
    </html>
  );
}
