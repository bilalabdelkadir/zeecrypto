import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// Pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signout from "./pages/Signout";
import Signin from "./pages/Signin";
import Account from "./pages/Account";
import CoinPage from "./pages/CoinPage";
// axios
import axios from "axios";
// Theme context
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  // use state
  const [coins, setcoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  // use effet
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setcoins(response.data);
      // console.log(response.data);
    };
    getData();
  }, [url]);
  return (
    <ThemeProvider>
      <React.StrictMode>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route />
          </Route>
        </Routes>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
