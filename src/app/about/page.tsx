import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import MapIcon from "@/components/icons/mapIcon";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function About() {
  return (
    <main className="">
      <section className="p-4">
        <div className="flex justify-center">
          <Image src="/Barber.png" width={143} height={160} alt="shops" />
        </div>
        <div className="font-bold text-xl py-4 text-center">About Us</div>
        <div className="font-bold text-base pb-2 text-center">
          PT MONGOL BALINDO VALAS
        </div>
        <p
          className={`${plus_Jakarta_Sans.className} text-sm indent-4 font-normal	pb-4 text-center`}
        >
          At BitExchange, we pride ourselves on being a leading provider of
          currency exchange and digital asset solutions. BitExchange commitment
          to excellence and innovation, establishing as a trusted partner for
          individuals and businesses alike.{" "}
        </p>
        <p
          className={`${plus_Jakarta_Sans.className} text-sm indent-4 font-normal	pb-4 text-center`}
        >
          Our extensive range of services includes the exchange of over 13
          currencies from around the globe, ensuring that our customers can
          easily access the funds they need wherever they are. In addition, we
          offer seamless support for digital assets, providing our clients with
          the flexibility and convenience of trading their cryptocurrency
          holdings alongside traditional currencies.{" "}
        </p>
        <p
          className={`${plus_Jakarta_Sans.className} text-sm indent-4 font-normal	pb-4 text-center`}
        >
          Our dedicated team of professionals is passionate about delivering
          superior customer service and creating value for our clients. Whether
          you're a seasoned traveler seeking competitive exchange rates or an
          investor looking to diversify your portfolio, you can count on
          BitExchange for reliable, efficient, and secure financial solutions.
        </p>
      </section>
      <div className="w-full h-64	my-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15774.008233309467!2d115.1720793!3d-8.7387406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2456cc382b135%3A0x20473c679f3048a4!2sBitExchange%20Money%20Changer%20(PT.%20Mongol%20Balindo%20Valas)!5e0!3m2!1sen!2s!4v1714286231984!5m2!1sen!2s"
          className="border-0 w-full h-64"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <div className="text-xl flex items-center justify-center font-semibold	text-center pb-4">
          <MapIcon />
          <div className="w-2"></div>BitExchange Store
        </div>
        <p
          className={`${plus_Jakarta_Sans.className} text-sm indent-4 font-normal	pb-4 text-center px-4`}
        >
          Jl. Kediri No.43, Lingkungan Pesalakan, Tuban, Kec. Kuta, Kabupaten
          Badung, Bali 80361, (in front of pepito Tuban)
        </p>
      </div>
    </main>
  );
}
