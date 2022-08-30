import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CoinPage from "./pages/CoinPage";
import Footer from "./components/Footer";
import Desc from "./components/Desc";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Desc />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<CoinPage />}>
          <Route path=":coinId" element={CoinPage} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
