import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/main/Header";

export const metadata: Metadata = {
  title: "UI Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col relative bg-[#020617]">
        <Header />
        {children}
      </body>
    </html>
  );
}
