import React from "react";
import { SInteractWalletGetStarted } from "./styles";
import particle from "./../../../../assets/Products/particle.png";

export default function InteractWalletGetStarted() {
  return (
    <SInteractWalletGetStarted>
      <div className="background"></div>
      <div className="lines"></div>

      <div className="getStartedWrap">
        <div className="title">
          <h1>InteractWallet</h1>
          <h2>will be available soon</h2>
        </div>
        <p>
          Explore our documentation to learn how you can easily and securely use
          InteractWallet for any Blockchain
        </p>
        <a href="/" className="bttn">
          Coming Soon
        </a>
      </div>
    </SInteractWalletGetStarted>
  );
}
