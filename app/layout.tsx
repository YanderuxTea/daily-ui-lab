import Header from "@/components/main/Header";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-[#020617]">
        <Header />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
