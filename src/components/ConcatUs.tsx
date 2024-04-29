"use client";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function ConcatUs() {
  return (
    <div className="px-4 py-6">
      <div className="font-bold text-xl pb-3 text-center">Contact Us</div>
      <div
        className={`${plus_Jakarta_Sans.className} text-sm indent-4 font-normal text-center pb-4`}
      >
        Jl. Kediri No.43, Lingkungan Pesalakan, Tuban, Kec. Kuta, Kabupaten
        Badung, Bali 80361, (in front of pepito Tuban)
      </div>
      <div className="px-4">
        <div className="w-full flex justify-between items-center mb-2">
          <input className="input-text" type="text" placeholder="First Name" />
          <input className="input-text" type="text" placeholder="Last Name" />
        </div>
        <div className="w-full mb-2">
          <input className="input-text w-full" type="text" placeholder="Email" />
        </div>
        <div className="w-full">
          <input  className="input-text w-full" type="text" placeholder="Message" />
        </div>
        <div className="flex justify-center pt-4">
          <button className="rounded-full bg-black-100 text-white text-blob text-base py-2 w-[166px]">Send Message</button>
        </div>
      </div>
    </div>
  );
}
