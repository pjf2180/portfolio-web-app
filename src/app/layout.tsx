import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar/navbar.component";
const roboto = Roboto_Mono({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        <div className="container mx-auto px-4 pb-4 lg:px-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
