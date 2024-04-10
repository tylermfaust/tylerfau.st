import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Tyler Faust",
  description: "Personal website of Tyler Faust.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} mx-auto max-w-7xl`}>
        <div id="header" className="flex h-12 w-full justify-between px-4 py-4">
          <Link
            href="/"
            style={{
              width: "128px",
              height: "128px",
              zIndex: 5,
            }}
          >
            <Image
              src="/TF Logo-Grey-Transparent.png"
              alt="Personal logo of Tyler Faust."
              width={128}
              height={128}
            />
          </Link>
          <div>
            <Link href="/" className="mr-6">
              Home
            </Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
