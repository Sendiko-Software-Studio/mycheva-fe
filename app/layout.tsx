import type { Metadata } from "next";
import { poppins400 } from "./theme/fonts";
import "./globals.css";

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
      <body className={`${poppins400.className} min-h-screen`}>{children}</body>
    </html>
  );
}
