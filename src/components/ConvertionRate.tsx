import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function ConvertionRate() {
  return (
    <div className="px-5 py-6 lg:bg-brown lg:py-28">
    <div className="font-bold text-xl pb-2 text-center lg:text-6xl lg:pb-6">
      Convertion Rate
    </div>
    <div
      className={`${plus_Jakarta_Sans.className} text-sm indent-4 font-normal text-center mb-4 lg:text-xl lg:w-[859px] lg:m-auto lg:mb-16`}
    >
      Unlike most banks, BitExchange uses the real exchange rate to exchange
      your money — just like the one used by Google.
    </div>
    <div className="flex justify-center">
      <Image
        className="lg:hidden"
        src="/change.png"
        width={335}
        height={241}
        alt={""}
      />
      <Image
        className="hidden lg:block"
        src="/change.png"
        width={1000}
        height={653}
        alt={""}
      />
    </div>
  </div>
  )
}
