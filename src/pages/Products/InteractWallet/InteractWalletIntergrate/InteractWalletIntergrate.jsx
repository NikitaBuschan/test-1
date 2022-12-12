import React from "react";
import img1 from "./../../../../assets/Products/WalletImg/top.png";
import img2 from "./../../../../assets/Products/WalletImg/bot.png";
import { SInteractWalletIntergrate } from "./styles";

export default function InteractWalletIntergrate() {
  return (
    <SInteractWalletIntergrate>
      <div className="background"></div>
      <div className="wrap">
        <div className="stars" />
        <div className="top">
          <div className="left">
            <h1>How to integrate InteractWallet?</h1>

            <p>
              InteractWallet is a default option in each application. When
              developer application decide to integrate our solution,
              InteractWallet is built in and will be part of the checkout
              process. We recommend to users to choose our wallet for future
              rewards, initiatives and to strength dev application and user
              engagement.
            </p>
          </div>
          <div className="right">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="bot">
          <div className="first">
            <h1>InteractWallet secured checkout architecture</h1>
            <p>Lorem ipsum</p>
          </div>
          <div className="second">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </SInteractWalletIntergrate>
  );
}
