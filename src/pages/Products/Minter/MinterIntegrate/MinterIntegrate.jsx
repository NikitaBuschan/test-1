import React from "react";
import img1 from "./../../../../assets/Products/MinterImg/Group1.png";
import img2 from "./../../../../assets/Products/MinterImg/Group2.png";
import { SMinterIntegrate } from "./styles";

export default function MinterIntegrate() {
  return (
    <SMinterIntegrate>
      <div className="background"></div>

      <div className="intedrateWrap">
        <div className="stars" />
        <div className="top">
          <div className="left">
            <h1>How to integrate?</h1>
            <h2>Simplified example for browsers using bundlers.</h2>
            <p>
              All API requests have the ability to be idempotent so that you
              don't accidentally mint the same item multiple times. To do this,
              just specify idempotency_key. All webhook requests have a retry
              policy so that you don't accidentally miss a single translation.
            </p>
          </div>
          <div className="right">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="bot">
          <div className="left">
            <img src={img2} alt="" />
          </div>
          <div className="right">
            <h1>Minter Architecture</h1>
            <p>
              Users do not need crypto for minting. We take care of all gas fees
              (once in a certain period of time we will charge a fee in fiat
              from the users). You can only pay with FIAT at first.
            </p>
          </div>
        </div>
      </div>
    </SMinterIntegrate>
  );
}
