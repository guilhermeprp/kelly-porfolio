import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/presentation/components/navbar";
import Background from "@/presentation/components/background";

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
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className="body-background">
        <ChakraProvider>
          <NavBar />
          <main className="relative z-10 flex min-h-screen flex-col items-center justify-between pt-24 px-0 sm:px-4 md:px-8 lg:px-32">
            {children}
            <Background />
          </main>
        </ChakraProvider>
      </body>
    </html>
  );
}
