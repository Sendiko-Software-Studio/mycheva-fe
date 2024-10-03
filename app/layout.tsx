import type { Metadata } from "next";
import { poppins400 } from "./theme/fonts";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MyCheva",
  description: "Platform for better communication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins400.className}`}>
        <main className="flex w-screen h-screen">
          <div className="flex-1 bg-primary-500"/>
          <div className="flex-1 bg-neutral-100">
            {children}
        </div>
        </main>
      </body>
    </html>
  );
}
