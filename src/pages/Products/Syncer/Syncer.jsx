import React from "react";
import FooterDark from "../../../components/FooterDark/FooterDark";
import HeaderDark from "../../../components/HeaderDark/HeaderDark";
import { SSyncer } from "./styles";
import SyncerCases from "./SyncerCases/SyncerCases";
import SyncerGetStarted from "./SyncerGetStarted/SyncerGetStarted";
import SyncerIntegrate from "./SyncerIntegrate/SyncerIntegrate";
import SyncerMain from "./SyncerMain/SyncerMain";

export default function Syncer() {
  return (
    <SSyncer>
      <HeaderDark />
      <SyncerMain />
      <SyncerCases />
      <SyncerIntegrate />
      <SyncerGetStarted />
      <FooterDark />
    </SSyncer>
  );
}
