import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import connectDB from "@/utils/db";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watkostmijninterieur.nl",
  description:
    "Maak gebruik van onze tool om de kosten van je interieur te berekenen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectDB();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
