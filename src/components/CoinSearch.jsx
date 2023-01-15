import React, { useState } from "react";
import CoinItems from "./CoinItems";

const CoinSearch = ({ coins }) => {
  const [SearchText, setSearchText] = useState("");
  return (
    <div className="rounded-div my-4">
      <div className=" flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2 ">Search Crypto</h1>
        <form>
          <input
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="outline-none w-full bg-primary border-input px-4 py-2  shadow-xl"
            type="text"
            placeholder="Search A Coin"
          />
        </form>
      </div>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">MKT</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (SearchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(SearchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItems coin={coin} key={coin.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
