import React from "react";
import { SWeb3AuthGetStarted } from "./styles";

export default function Web3AuthGetStarted() {
  return (
    <SWeb3AuthGetStarted>
      <div className="background"></div>
      <div className="lines"></div>

      <div className="getStartedWrap">
        <div className="title">
          <h1>Get started</h1>
          <h2>with Web3 Auth</h2>
        </div>
        <p>
          Explore our documentation to learn how you can integrate Web3 Auth
          into your applications today.
        </p>
        <a href="/" className="bttn">
          Integrate now
        </a>
      </div>
    </SWeb3AuthGetStarted>
  );
}
