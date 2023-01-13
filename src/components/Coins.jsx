import React from "react";
import CoinItem from "./CoinItem";
import Coin from "./coin";
import { Link } from "react-router-dom";

const Coins = ({ coins }) => {
  return (
    <>
      <div className="flex justify-center items-center w-full bg-gray-600">
        <div className="bg-gray-600 fixed top-0 flex px-5 w-full max-w-[1000px] mx-auto justify-between py-2">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H</p>
          <p className="hidden md:flex">Volume</p>
          <p className="hidden md:flex">MKT cap</p>
        </div>
      </div>

      {coins.map((coin) => {
        return (
          <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
            <CoinItem coin={coin} />
          </Link>
        );
      })}
    </>
  );
};

export default Coins;
