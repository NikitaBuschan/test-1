import React from "react";
import Footer from "../../../components/Footer/Footer";

import HeaderDark from "../../../components/HeaderDark/HeaderDark";
import { SGrants } from "./styles";
import IWGrantsProg from "../../../components/GrantsComponent/IWGrantsProg/IWGrantsProg";
import InvolvedThroughGP from "../../../components/GrantsComponent/InvolvedThroughGP/InvolvedThroughGP";
import IntegrationProgramBlock from "../../../components/GrantsComponent/IntegrationProgramBlock/IntegrationProgramBlock";
import CommunityProgramBlock from "../../../components/GrantsComponent/CommunityProgramBlock/CommunityProgramBlock";
import BusinessProgramBlock from "../../../components/GrantsComponent/BusinessProgramBlock/BusinessProgramBlock";
import MarketingProgramBlock from "../../../components/GrantsComponent/MarketingProgramBlock/MarketingProgramBlock";
import PartnersLine from "../../../components/GrantsComponent/PartnersLine/PartnersLine";

export default function Grants() {
  return (
    <SGrants>
      <HeaderDark />

      <main>
        <IWGrantsProg />
        <InvolvedThroughGP />
        <div className="wrapper">
          <IntegrationProgramBlock />
          <CommunityProgramBlock />
          <BusinessProgramBlock />
          <MarketingProgramBlock />
        </div>
        <PartnersLine />
      </main>

      <Footer />
    </SGrants>
  );
}
