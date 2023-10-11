import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";

const myFont = localFont({
  src: [
    {
      path: "../public/font/airbnbregular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/airbnbmedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/airbnbbold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Airbnb",
  description:
    "Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={myFont.className}>
          {" "}
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
