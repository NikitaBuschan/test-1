import React from "react";
import { SInfrastructureBlock } from "./styles";

import infr from "../../../assets/images/Home/infr.png";

export default function InfrastructureBlock() {
  return (
    <SInfrastructureBlock>
      <div className="left">
        <div className="title">
          <h1>One</h1>
          <h2>Infrastructure. </h2>
          <h1>Unlimited</h1>
          <h2>Capabilities.</h2>
        </div>

        <p>
          A set of powerful APIs and SDKs allowing any app developer to
          integrate and achieve Web3 capabilities without any blockchain
          knowledge. Interact is the new architecture to bring forward and
          connect web2 apps to blockchains, transforming them into Web3 apps.
        </p>
      </div>
      <div className="right">
        <img src={infr} alt="infr" />
      </div>
    </SInfrastructureBlock>
  );
}
