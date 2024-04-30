import BitExchange from "@/components/BitExchange";
import Carousel from "@/components/Carousel";
import ConcatUs from "@/components/ConcatUs";
import ConvertionRate from "@/components/ConvertionRate";
import WhyBitExchange from "@/components/WhyBitExchange";

export default function Home() {
  return (
    <main>
      <BitExchange />
      <WhyBitExchange/>
      <ConvertionRate/>
      <Carousel />
      <ConcatUs />
    </main>
  );
}
