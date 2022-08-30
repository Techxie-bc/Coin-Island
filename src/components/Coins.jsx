import React from "react";
import MainCoins from "./MainCoins";
import "./coins.css";
import { Link } from "react-router-dom";
import CoinPage from "../pages/CoinPage";

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Value</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>

        {props.coins.map((coins) => {
          return (
            <Link
              to={`/coin/${coins.id}`}
              element={<CoinPage />}
              key={coins.id}
            >
              <MainCoins coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
