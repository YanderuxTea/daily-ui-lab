import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

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
      <body className="min-h-full flex flex-col relative ">
        <Link
          href={"/"}
          className={"absolute top-2.5 left-2.5 font-bold text-neutral-100"}
        >
          На главную
        </Link>
        {children}
      </body>
    </html>
  );
}
