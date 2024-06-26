"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function ConcatUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendLark = async () => {
    if (!firstName || !lastName || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // const res = await fetch("/api/send-lark", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     firstName,
    //     lastName,
    //     email,
    //     message,
    //   }),
    // });

    try {
      const res: any = await fetch("https://bitexchange.co.id/api-exchange/sendLark", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `first_name=${firstName}&last_name=${lastName}&email=${email}&message=${message}`
      });

      if (res.code === 0) {
        alert("Message sent successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.log('error', error);
      alert("Failed to send message");
    }
  }

  return (
    <div id="concat_us" className="px-4 py-6 lg:bg-concat-us lg:bg-no-repeat	lg:bg-right	">
      <div className="lg:w-[566px] lg:h-[580px]">
        <div className="font-bold text-xl pb-3 text-center lg:text-left lg:text-6xl lg:px-8 lg:pb-6">
          Contact Us
        </div>
        <div
          className={`${plus_Jakarta_Sans.className} text-sm indent-4 font-normal text-center pb-4 lg:text-left lg:text-xl lg:px-8 lg:pb-8`}
        >
          Jl. Kediri No.43, Lingkungan Pesalakan, Tuban, Kec. Kuta, Kabupaten
          Badung, Bali 80361, (in front of pepito Tuban)
        </div>
        <div className="px-4 lg:px-8">
          <div className="w-full flex justify-between items-center mb-2 lg:mb-4">
            <input
              className="input-text lg:w-60"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              className="input-text lg:w-60"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div className="w-full mb-2 lg:mb-4">
            <input
              className="input-text w-full"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="w-full lg:mb-4 lg:hidden">
            <input
              className="input-text w-full"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            />
          </div>
          <div className="w-full lg:mb-4 hidden lg:block">
            <textarea
              autoCapitalize="off"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-text w-full resize-none	"
            ></textarea>
          </div>
          <div className="flex justify-center pt-4 lg:justify-start">
            <button onClick={handleSendLark} className="rounded-full bg-black-100 text-white text-blob text-base py-2 w-[166px] lg:py-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
