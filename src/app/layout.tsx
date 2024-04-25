import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from '@/components/NavBar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "P5 Sketchbook",
  description: "P5 Sketches by S. Ertmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Navbar />
    </html>
  );
}
