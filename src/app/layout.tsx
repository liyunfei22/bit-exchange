import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import LogInIcon from "@/components/icons/Logo";
import LogInIconLarge from "@/components/icons/Logo-large";
import MenuIcon from "@/components/icons/Menu";
import LogInIcon2 from "@/components/icons/Logo2";
import Facebook from "@/components/icons/Facebook";
import Instagram from "@/components/icons/Instagram";
import Linkedin from "@/components/icons/Linkedin";
import Youtobe from "@/components/icons/Youtobe";
import Link from 'next/link'
import Header from "@/components/Header";

const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

export const metadata: Metadata = {
  title: "BitExchange",
  description: "BitExchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>{children}</main>
        <footer className="flex flex-col items-center py-6 lg:py-[60px]">
          <div className="pb-5">
            <LogInIcon2/>
          </div>
          <div className="lg:flex lg:px-20 lg:justify-between lg:w-full">
          <div className="text-xs	text-black-100 pb-5">© 2024 BitExchange. All Rights Reserved</div>
          <div className="flex items-center pb-5 justify-center">
            <div className="mr-6"><Facebook></Facebook></div>
            <div className="mr-6"><Instagram></Instagram></div>
            <div className="mr-6"><Linkedin></Linkedin></div>
            <div className=""><Youtobe></Youtobe></div>
          </div>
          <div className="flex flex-col items-center lg:flex-row">
          <div className="font-bold	text-base	pb-5 lg:mr-12">Privacy Policy</div>
          <div className="font-bold	text-base pb-5">Terms of Services</div>
          </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
