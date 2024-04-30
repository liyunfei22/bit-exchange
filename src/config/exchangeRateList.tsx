import GBPIcon from "@/components/flag/GBP";
import USDIcon from "@/components/flag/USD";
import AUDIcon from "@/components/flag/AUD";
import AEDIcon from "@/components/flag/AED.svg";
import Image from "next/image";

const exchangeRateList = [
  { value: "GBP", rate: 1.1, icon: <GBPIcon /> },
  { value: "USD", rate: 1.2, icon: <USDIcon /> },
  { value: "AUD", rate: 1.2, icon: <AUDIcon /> },
  { value: "AED", rate: 1.2, icon: <AEDIcon/>},
];

export default exchangeRateList;
