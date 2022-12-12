import React from "react";
import img1 from "./../../../../assets/Products/WebAuthImg/web3top.png";
import img2 from "./../../../../assets/Products/WebAuthImg/web3bot.png";
import { SWeb3AuthIntegrate } from "./styles";

export default function Web3AuthIntegrate() {
  return (
    <SWeb3AuthIntegrate>
      <div className="background"></div>
      <div className="Web3intedrateWrap">
        <div className="stars" />
        <div className="top">
          <div className="left">
            <h1>Plug and Play Integration</h1>
            <h2>Simplified example for browsers using bundlers.</h2>
            <p>
              When you run this code, the browser will open an additional window
              in which, after choosing a wallet, he signs your message from
              messageToSign. After signing, a signed message, an address, and an
              unsigned message will be returned to the MydApp site. Why not just
              return the address? The fact is that in order to avoid various
              hacks, it is better to cryptographically check the message
              yourself. In this example, the requestAddress function
              automatically does this.
            </p>
          </div>
          <div className="right">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="bot">
          <div className="first">
            <h1>Web3 Auth Simple Architecture</h1>
            <p>
              Works on the principle of an external session link on which all
              interaction with all wallets is already configured.
              <br />
              <br />
              on which all interaction with all wallets is already configured.
              The user selects his favorite wallet and then redirected back to
              your application with a special key, upon decryption of which you
              will find out the user's address, which you need to bind to the
              same user.
            </p>
          </div>
          <div className="second">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </SWeb3AuthIntegrate>
  );
}
