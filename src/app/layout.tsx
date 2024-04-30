import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import LogInIcon2 from "@/components/icons/Logo2";
import Facebook from "@/components/icons/Facebook";
import Instagram from "@/components/icons/Instagram";
import Linkedin from "@/components/icons/Linkedin";
import Youtobe from "@/components/icons/Youtobe";
import Header from "@/components/Header";
import PhoneIcon from "@/components/icons/phone";
import PhoneIconL from "@/components/icons/phone-l";

const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
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
        <Header />
        <main>{children}</main>
        <footer className="flex flex-col items-center w-screen py-6 lg:py-[60px]">
          <div className="pb-5">
            <LogInIcon2 />
          </div>
          <div className="lg:flex lg:px-20 lg:justify-between lg:w-full">
            <div className="text-xs	text-black-100 pb-5">
              © 2024 BitExchange. All Rights Reserved
            </div>
            <div className="flex items-center pb-5 justify-center">
              <div className="mr-6">
                <Facebook></Facebook>
              </div>
              <a  href="https://www.instagram.com/bitexchangebali/?igsh=bjkwcTl4MTIzenZ6" className="mr-6">
                <Instagram></Instagram>
              </a>
              <div className="mr-6">
                <Linkedin></Linkedin>
              </div>
              <div className="">
                <Youtobe></Youtobe>
              </div>
            </div>
            <div className="flex flex-col items-center lg:flex-row">
              <div className="font-bold	text-base	pb-5 lg:mr-12">
                Privacy Policy
              </div>
              <div className="font-bold	text-base pb-5">Terms of Services</div>
            </div>
          </div>
        </footer>
        <div className="fixed bottom-48 lg:right-6 right-4">
          <a
            href="https://wa.me/628990109898"
            className="lg:hidden w-10 h-10 overflow-hidden"
          >
            <PhoneIcon />
          </a>
          <a href="https://wa.me/628990109898" className="hidden lg:block">
            <PhoneIconL />
          </a>
        </div>
      </body>
    </html>
  );
}
