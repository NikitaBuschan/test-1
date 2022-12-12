import React from "react";
import FooterDark from "../../../components/FooterDark/FooterDark";
import HeaderDark from "../../../components/HeaderDark/HeaderDark";
import InteractWalleCases from "./InteractWalletCases/InteractWalletCases";
import InteractWalletGetStarted from "./InteractWalletGetStarted/InteractWalletGetStarted";
import InteractWalletIntergrate from "./InteractWalletIntergrate/InteractWalletIntergrate";
import InteractWalletMain from "./InteractWalletMain/InteractWalletMain";
import { SInteractWallet } from "./styles";

export default function InteractWallet() {
  return (
    <SInteractWallet>
      <HeaderDark />
      <InteractWalletMain />
      <InteractWalleCases />
      <InteractWalletIntergrate />
      <InteractWalletGetStarted />
      <FooterDark />

    </SInteractWallet>
  );
}
