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
        <nav className="w-full h-18 border-b lg:h-[120px] border-black	 flex justify-between items-center px-4">
          <div className="lg:hidden"><LogInIcon/></div>
          <div className="hidden lg:block lg:ml-20"><LogInIconLarge/></div>
          <div>
            <div className="lg:hidden"><MenuIcon/></div>
            <div className="hidden lg:flex text-2xl color-black ">
              <Link className="mr-8" href="/">Home</Link>
              <Link className="mr-8" href="/about">About Us</Link>
              <div className="mr-8">Contact Us</div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="flex flex-col items-center py-6">
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
