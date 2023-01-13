import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import loading from "../assets/loading.gif";

const Coin = () => {
  const { id } = useParams();

  const [coin, setcoin] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setcoin(response.data);
      setisLoading(false);
    };
    getData();
  }, []);

  return (
    <div>
      {!isLoading ? (
        <h1>{coin.name}</h1>
      ) : (
        <div className="h-[100vh] flex justify-center items-center">
          <img className="h-[200px] w-[200px]" src={loading} alt="loaindg" />
        </div>
      )}
    </div>
  );
};

export default Coin;
