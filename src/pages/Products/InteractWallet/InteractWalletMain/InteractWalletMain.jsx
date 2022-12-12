import React from "react";

import left from "./../../../../assets/Products/WalletImg/main.png";
import { SInteractWalletMain } from "./styles";

export default function InteractWalletMain() {
  return (
    <SInteractWalletMain>
      <div className="background"></div>
      <div className="mainWrap">
        <div className="left">
          <div className="title">
            <p>Interact</p>Wallet
          </div>
          <div className="text">
            One wallet to rule them all. An easy-to-use, multichain, gamified
            crypto wallet which serve as a gateway to onboard the billions of
            web2 users and store any digital asset.
          </div>
          <a className="bttn">Coming Soon</a>
        </div>
        <div className="right">
          <div className="wrap">
            <img src={left} alt="" />
          </div>
        </div>
      </div>
    </SInteractWalletMain>
  );
}
