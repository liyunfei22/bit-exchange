"use client";
import { useState } from "react";
import GBPIcon from "./flag/GBP";
import IDRIcon from "./flag/IDR";
import ExchangeIcon from "./icons/Exchange";
import exchangeRateList from "../config/exchangeRateList";

export default function BitExchange() {
  const [changeList] = useState(exchangeRateList);
  const [theChange, setTheChange] = useState<any>(exchangeRateList[0]);
  const [amount1, setAmount1] = useState<number>(0);
  const [amount2, setAmount2] = useState<number>(0);

  const handleAmount1Change = (e: any) => {
    const value = +e.target.value;
    setAmount1(value);
    setAmount2(+(value * theChange.rate).toFixed(2));
  };

  const handleAmount2Change = (e: any) => {
    const value = +e.target.value;
    setAmount2(value);
    setAmount1(+(value / theChange.rate).toFixed(2));
  };

  const handleCurrencyChange = (e: any) => {
    const value = e.target.value;
    const selected =
      changeList.find((item) => item.value === value) || changeList[0];
    setTheChange(selected);
    setAmount2(+(amount1 * selected.rate).toFixed(2));
  };

  return (
    <div className="py-4 lg:py-[120px] lg:px-16">
      <div className="font-bold text-xl text-center px-12 mb-4 lg:mb-8 lg:w-[880px] lg:text-6xl lg:font-extrabold lg:mx-auto">
        Maximize Money Exchange, Best Rate in Bali!
      </div>
      <div className="w-full px-5 mb-4">
        <div className="w-full px-4 py-6 bg-brown rounded-2xl">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-2/5 mb-4 md:mb-0">
              <div className="pb-2">Amount</div>
              <div className="w-full relative">
                <input
                  className="input-number w-full"
                  value={amount1}
                  onChange={handleAmount1Change}
                />
                <label
                  htmlFor="flag"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 rounded-r-lg"
                >
                  <span>{theChange ? theChange.icon : changeList[0].icon}</span>
                  <select
                    className="select-contry ml-2"
                    name=""
                    id="flag"
                    onChange={handleCurrencyChange}
                  >
                    {changeList.map((item) => {
                      return (
                        <option key={item.value} value={item.value}>
                          {item.value}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mb-4 md:mb-0 lg:hidden md:hidden">
              <ExchangeIcon />
            </div>

            <div className="w-full md:w-2/5">
              <div className="pb-2">Converted to</div>
              <div className="w-full relative">
                <input
                  className="input-number w-full"
                  value={amount2}
                  onChange={handleAmount2Change}
                />
                <label
                  htmlFor="flag"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <span>
                    <IDRIcon />
                  </span>
                  <select className="select-contry ml-2">
                    <option value="IDR" key="IDR">
                      IDR
                    </option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between">
          <div className="mt-4">
            <div className="text-xl text-center">
              <span>
                {amount1} {theChange.value}
              </span>
              <span className="px-1">=</span>
              <span className="text-green-text">{amount2}</span>
              <span>IDR</span>
            </div>
            <div className="text-center font-light">
              Mid-market exchange rate at 10:38
            </div>
          </div>

          <div className="flex justify-center pt-5">
            <button className="rounded-full bg-yellow text-black-100 text-blob text-base py-2 w-48">
              Browse All Currencies
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
