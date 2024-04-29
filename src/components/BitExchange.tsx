"use client"
import { useState } from "react";
import GBPIcon from "./flag/GBP";
import IDRIcon from "./flag/IDR";
import ExchangeIcon from "./icons/Exchange";

export default function BitExchange() {
  const selectList = [
    {
      value: "IDR",
      rate: 1,
      icon: <IDRIcon />,
    },
    {
      value: "GBP",
      rate: 1.1,
      icon: <GBPIcon />,
    },
    {
      value: "GBP2",
      rate: 1.1,
      icon: <GBPIcon />,
    },
  ];
  const [changeList, setChangeList] = useState(selectList);
  const [theChange, setTheChange] = useState();

  const [targetList, setTargetList] = useState([]);
  const [target, setTarget] = useState()
  return (
    <div className="w-full px-5 mb-4">
      <div className="w-full px-4 py-6 bg-brown rounded-2xl">
        <div>
          <div className="pb-2">Amount</div>
          <div className="w-full relative">
            <input className="input-number" type="number" />
            <label htmlFor="flag">
              <span className="absolute top-3.5">
                <GBPIcon />
              </span>
              <select className="select-contry" name="" id="flag">
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
        <div className="flex justify-center pt-5 pb-1">
          <ExchangeIcon />
        </div>
        <div>
          <div className="pb-2">Converted to</div>
          <div className="w-full relative">
            <input className="input-number" type="number" />
            <label htmlFor="flag">
              <span className="absolute top-3.5">
                <IDRIcon />
              </span>
              <select className="select-contry">
                <option value="IDR">
                 IDR
                </option>
              </select>
            </label>
          </div>
        </div>
        <div>
          <div className="text-xl text-center pt-4">
            <span>1.000 GBP</span>
            <span className="px-1">=</span>
            <span className="text-green-text">19.990</span> <span>IDR</span>
          </div>
          <div className="text-center font-light">Mid-market exchange rate at 10:38</div>
        </div>
        <div className="flex justify-center pt-5">
          <button className="rounded-full bg-yellow text-black-100 text-blob text-base py-2 w-48">Browse All Currencies</button>
        </div>
      </div>
    </div>
  );
}
