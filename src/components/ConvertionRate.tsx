import { Plus_Jakarta_Sans } from "next/font/google";
import exchangeRateList from '@/config/exchangeRateList';
const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function ConvertionRate() {
  const list = exchangeRateList
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
        <div className="lg:bg-[#e0edf0] bg-brown lg:rounded-3xl rounded-xl	 overflow-hidden">
        <table >
          <thead>
            <tr className="lg:h-20 h-8 lg:text-3xl text-xs font-bold">
              <th className="w-80 border-b border-r border-black">Currency</th>
              <th className="w-80 border-b border-r border-black">Buy</th>
              <th className="w-80 border-b border-black">Sell</th>
            </tr>
          </thead>
          <tbody className="lg:text-xl text-sm font-light	">
            {
              list.map(item => {
                return (
                  <tr key={item.value} className="text-center lg:h-20 h-8">
                  <td className="border-b border-r border-black">USD</td>
                  <td className="border-b border-r border-black">1.00</td>
                  <td className="border-b border-black">1.20</td>
                </tr>
                )
              })
            }
            <tr className="text-center lg:h-20 h-8">
              <td className="border-r border-black">USD</td>
              <td className="border-r border-black">1.00</td>
              <td className="border-black">1.20</td>
            </tr>
          </tbody>
        </table>
        </div>
      
      </div>
    </div>
  );
}
