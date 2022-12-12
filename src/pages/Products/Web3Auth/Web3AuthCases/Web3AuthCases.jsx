import React from "react";
import img1 from "./../../../../assets/Products/WebAuthImg/cases1.png";
import img2 from "./../../../../assets/Products/WebAuthImg/cases2.png";
import img3 from "./../../../../assets/Products/WebAuthImg/cases3.png";
import img4 from "./../../../../assets/Products/WebAuthImg/cases4.png";
import { SWeb3AuthCases } from "./styles";

export default function Web3AuthCases() {
  return (
    <SWeb3AuthCases>
      <div className="casesWrap">
        <div className="title">Web3 Auth Use Cases</div>
        <div className="web3Blocks">
          <div className="block">
            <img src={img1} alt="" />
            <div className="text">
              <h1>Log In with Wallet</h1>
              <p>
                Let's imagine that you are the app developer of clash royale
              </p>
            </div>
          </div>
          <div className="block">
            <img src={img2} alt="" />
            <div className="text">
              <h1>Token-Gated Content</h1>
              <p>
                {" "}
                Your user wants to connect his item with blockchain, which is
                called minting. To do this, you only need to make one request to
                our API for minting this item and that's it.
              </p>
            </div>
          </div>
          <div className="block">
            <img src={img3} alt="" />
            <div className="text">
              <h1>OAuth Integration</h1>
              <p>
                {" "}
                Further, through Webhooks or WebSockets, we will inform you
                about the movement of this item from wallet to wallet
              </p>
            </div>
          </div>
          <div className="block">
            <img src={img4} alt="" />
            <div className="text">
              <h1>Subscribe with Wallet</h1>
              <p>
                {" "}
                Further, through Webhooks or WebSockets, we will inform you
                about the movement of this item from wallet to wallet
              </p>
            </div>
          </div>
        </div>
        <div className="footerImg"></div>
      </div>
    </SWeb3AuthCases>
  );
}
