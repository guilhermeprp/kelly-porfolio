import NavBar from "@/components/navbar";
import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelly Jenyfer",
  description: "Jornalista e Redatora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body-background">
        <ChakraProvider>
          <NavBar></NavBar>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
