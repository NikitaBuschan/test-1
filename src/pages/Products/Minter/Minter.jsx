import React from "react";
import FooterDark from "../../../components/FooterDark/FooterDark";
import HeaderDark from "../../../components/HeaderDark/HeaderDark";
import MinterCases from "./MinterCases/MinterCases";
import MinterGetStarted from "./MinterGetStarted/MinterGetStarted";
import MinterIntegrate from "./MinterIntegrate/MinterIntegrate";
import MinterMain from "./MinterMain/MinterMain";
import { SMinter } from "./styles";

export default function Minter() {
  return (
    <SMinter>
      <HeaderDark />
      <MinterMain />
      <MinterCases />
      <MinterIntegrate />
      <MinterGetStarted />
      <FooterDark />
    </SMinter>
  );
}
