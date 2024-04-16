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
            <Link
              href="/"
              className="mr-6 font-bold text-[#545454] hover:underline"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="font-bold text-[#545454] hover:underline"
            >
              Blog
            </Link>
          </div>
        </div>
        {children}
        <div
          id="footer"
          className="absolute bottom-4 flex h-12 w-full justify-between px-4 py-8 font-bold"
        >
          © 2024 Tyler Faust
        </div>
      </body>
    </html>
  );
}
