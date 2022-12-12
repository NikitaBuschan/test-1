import React from "react";
import FooterDark from "../../../components/FooterDark/FooterDark";
import HeaderDark from "../../../components/HeaderDark/HeaderDark";
import { SWeb3Auth } from "./styles";
import Web3AuthCases from "./Web3AuthCases/Web3AuthCases";
import Web3AuthGetStarted from "./Web3AuthGetStarted/Web3AuthGetStarted";
import Web3AuthIntegrate from "./Web3AuthIntegrate/Web3AuthIntegrate";
import Web3AuthMain from "./Web3AuthMain/Web3AuthMain";

export default function Web3Auth() {
  return (
    <SWeb3Auth>
      <HeaderDark />
      <Web3AuthMain />
      <Web3AuthCases />
      <Web3AuthIntegrate />
      <Web3AuthGetStarted />
      <FooterDark />
    </SWeb3Auth>
  );
}
