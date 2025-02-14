import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const fontSans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PIMP FUN Dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased bg-purple-800`}>
        {children}
      </body>
    </html>
  );
}
