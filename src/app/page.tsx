import BitExchange from "@/components/BitExchange";
import Carousel from "@/components/Carousel";
import ConcatUs from "@/components/ConcatUs";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {

  const list = [
    {
      img: "/Coins.png",
      width: 58,
      height: 80,
      alt: "Rates",
      title: "Rates",
      describe:
        "BitExchange provide you the best rate you can find all over Bali.",
    },
    {
      img: "/lock.png",
      width: 58,
      height: 80,
      alt: "Safe & Honest",
      title: "Safe & Honest",
      describe:
        "Our staff are all professional handling over most of the countries tourists.",
    },
    {
      img: "/Earth.png",
      width: 90,
      height: 80,
      alt: "Currencies",
      title: "Currencies",
      describe:
        "We accept more than 13+ countries currencies, digital assets and digital currencies exchange.",
    },
  ];
  return (
    <main className="py-4">
      <div className="font-bold text-xl text-center px-12 mb-4">
        Maximize Money Exchange, Best Rate in Bali!
      </div>
      <BitExchange/>
      <div className="px-5 py-6">
        <div className="font-bold text-xl pb-2 text-center">
          Why BitExchange
        </div>
        <div
          className={`${plus_Jakarta_Sans.className} text-sm indent-4 font-normal text-center`}
        >
          Welcome to BitExchange – your premier destination for hassle-free
          currency exchange. Wondering why you should choose us? Here's why:
        </div>
      </div>
      {list.map((item) => {
        return (
          <div
            key={item.img}
            className="flex flex-col justify-center items-center mb-1 px-5 pt-4"
          >
            <div>
              <Image
                className="mb-2"
                src={item.img}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
            </div>
            <div className="font-semibold text-base">{item.title}</div>
            <div
              className={`${plus_Jakarta_Sans.className} text-base indent-4 font-normal text-center`}
            >
              {item.describe}
            </div>
          </div>
        );
      })}
      <div className="px-5 py-6">
        <div className="font-bold text-xl pb-2 text-center">
          Convertion Rate
        </div>
        <div
          className={`${plus_Jakarta_Sans.className} text-sm indent-4 font-normal text-center mb-4`}
        >
          Unlike most banks, BitExchange uses the real exchange rate to exchange
          your money — just like the one used by Google.
        </div>
        <Image
          src="/change.png"
          width={335}
          height={241}
          alt={""}
        />
      </div>
      <Carousel/>
      <div>
        <ConcatUs/>
      </div>
      <div></div>
    </main>
  );
}
