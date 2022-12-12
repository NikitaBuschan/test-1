import React from "react";
import { SProductsBlock } from "./styles";

import mi from "../../../assets/images/Home/mi.png";
import ds from "../../../assets/images/Home/ds.png";
import w3i from "../../../assets/images/Home/w3i.png";
import int from "../../../assets/images/Home/int.png";
import scrollToTop from "../../../helpers/scrollToTop";
import { Link } from "react-router-dom";

export default function ProductsBlock() {
  return (
    <SProductsBlock>
      <div className="wrap">
        <h1>
          {" "}
          Introducing our <span>Products</span>
        </h1>

        <div className="cards">
          <div className="card">
            <img src={mi} alt="" />
            <h2>Minter</h2>
            <p className="descr">Create, manage and trade in-game assets</p>
            <Link
              to={"/products/minter"}
              className="try"
              onClick={() => scrollToTop()}
            >
              <p>Learn more</p>
            </Link>
          </div>
          <div className="card">
            <img src={ds} alt="" />
            <h2>Data Syncer</h2>
            <p className="descr">Sync your app with any blockchain network</p>
            <Link
              to={"/products/syncer"}
              className="try"
              onClick={() => scrollToTop()}
            >
              <p>Learn more</p>
            </Link>
          </div>
          <div className="card">
            <img src={w3i} alt="" />
            <h2>Web3 Auth</h2>
            <p className="descr">Log into your app with any digital wallet</p>
            <Link
              to={"/products/web3_auth"}
              className="try"
              onClick={() => scrollToTop()}
            >
              <p>Learn more</p>
            </Link>
          </div>
          <div className="card">
            <img src={int} alt="" />
            <h2>InteractWallet</h2>
            <p className="descr">Coming soon!</p>
            <Link
              to={"/products/interact_wallet"}
              className="try"
              onClick={() => scrollToTop()}
            >
              <p>Learn more</p>
            </Link>
          </div>
        </div>
      </div>
    </SProductsBlock>
  );
}
