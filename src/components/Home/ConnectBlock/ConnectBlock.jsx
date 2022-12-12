import React from "react";
import { SConnectBlock } from "./styles";

export default function ConnectBlock() {
  return (
    <SConnectBlock>
      <div className="bg" />

      <div className="wrap">
        <div className="left">
          <div className="top">
            <div className="card">
              <h1>4.8M</h1>
              <p>
                Available Games and <br /> Applications in App Store
              </p>
            </div>
            <div className="card">
              <h1>4M</h1>
              <p>
                Available Games and <br /> Applications in Google Play Store
              </p>
            </div>
          </div>
          <div className="bot">
            <div className="card">
              <h1>$206B</h1>
              <p>
                The mobile app market size <br /> estimated at $206B in 2022
              </p>
            </div>
            <div className="card">
              <h1>$0</h1>
              <p>
                Zero integration fees for <br /> app developers
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <h1>
            Connect any application <br /> to the blockchain
          </h1>
          <h2>A bridge between applications and blockchains</h2>
          <p>
            Our vision is to empower apps by providing them with plug and play
            Web3 integration tools, allowing any application to InteractWith any
            blockchain.
          </p>
        </div>
      </div>
    </SConnectBlock>
  );
}
