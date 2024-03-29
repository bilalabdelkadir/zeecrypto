import React, { useEffect, useState } from "react";
import axios from "axios";

const Trending = () => {
  const url = "https://api.coingecko.com/api/v3/search/trending";
  const [trending, settrending] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      settrending(response.data.coins);
    };
    getData();
  }, []);

  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h1 className="text-2xl py-4 font-bold">Trending Coins</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trending.map((coin, idx) => (
          <div
            key={idx}
            className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex">
                <img
                  className="rounded-full mr-2"
                  src={coin.item.small}
                  alt="/"
                />
                <div>
                  <p className="font-bold">{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-4 m-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt=""
                />
                <p>{coin.item.price_btc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
