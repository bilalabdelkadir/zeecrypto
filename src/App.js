import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Coin from "./components/coin";

function App() {
  const [coins, setcoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setcoins(response.data);
    };
    getData();
  }, []);

  return (
    <div className="bg-gray-800 text-gray-100">
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
    </div>
  );
}

export default App;
