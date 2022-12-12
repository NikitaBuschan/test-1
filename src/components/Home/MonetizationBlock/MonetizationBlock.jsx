import React from "react";
import { SMonetizationBlock } from "./styles";

import anim1 from "../../../assets/images/Home/anim1.png";

export default function MonetizationBlock() {
  return (
    <SMonetizationBlock>
      <div className="bg">
        <div className="bgtb"></div>
      </div>
      <div className="top">
        <div className="centrl">
          <img src={anim1} alt="anim1" />
          <div className="title">
            <h1>A</h1>
            <h2>new age</h2>
            <h1>of</h1>
            <h1>monetization tools</h1>
          </div>
          <p>
            InteractWith is a set of robust, free to use, plug and play <br />
            monetization tools for Web2, Web3 and semi-Web3 applications, <br />
            providing seamless connection to any blockchain network.
          </p>
        </div>
      </div>
      <div className="bot">
        <div className="card1">
          <div className="bg" />
          <h1>Expand your user base</h1>
          <p>
            There are millions of active web3 users and the adoption curve is
            similar to the beginning of the internet. These users have extremely
            high LTV and retention rates.{" "}
          </p>
        </div>
        <div className="card2">
          <div className="bg" />
          <h1>Improve your monetization</h1>
          <p>
            New product offerings and user experiences provides app developers
            to monetize their app better. We will increase the LTV for the
            existing users too.
          </p>
        </div>
      </div>
    </SMonetizationBlock>
  );
}
