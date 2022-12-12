import React from "react";
import { Route, Routes } from "react-router-dom";

import BusinessProgram from "./pages/Community/Grants/BusinessProgram/BusinessProgram";
import CommunityProgram from "./pages/Community/Grants/CommunityProgram/CommunityProgram";
import Grants from "./pages/Community/Grants/Grants";
import IntegrationProgram from "./pages/Community/Grants/IntegrationProgram/IntegrationProgram";
import MarketingProgram from "./pages/Community/Grants/MarketingProgram/MarketingProgram";
import Blog from "./pages/Company/Blog/Blog";
import Careers from "./pages/Company/Careers/Careers";
import UseCases from "./pages/Developers/UseCases/UseCases";
import Home from "./pages/Home/Home";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/Legal/TermsOfService/TermsOfService";
import InteractWallet from "./pages/Products/InteractWallet/InteractWallet";
import Minter from "./pages/Products/Minter/Minter";
import Syncer from "./pages/Products/Syncer/Syncer";
import Web3Auth from "./pages/Products/Web3Auth/Web3Auth";

import "./styles/reset.css";
import "./styles/satoshi.css";

export default function App() {
  return (
    <div className="App" data-testid="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/minter" element={<Minter />} />
        <Route exact path="/products/syncer" element={<Syncer />} />
        <Route exact path="/products/web3_auth" element={<Web3Auth />} />
        <Route
          exact
          path="/products/interact_wallet"
          element={<InteractWallet />}
        />
        <Route exact path="/developers/use_cases" element={<UseCases />} />
        <Route exact path="/company/careers" element={<Careers />} />
        <Route exact path="/company/blog" element={<Blog />} />
        <Route exact path="/community/grants" element={<Grants />} />
        <Route
          exact
          path="/community/grants/integration_program"
          element={<IntegrationProgram />}
        />
        <Route
          exact
          path="/community/grants/community_program"
          element={<CommunityProgram />}
        />
        <Route
          exact
          path="/community/grants/business_program"
          element={<BusinessProgram />}
        />
        <Route
          exact
          path="/community/grants/marketing_program"
          element={<MarketingProgram />}
        />
        <Route exact path="/legal/privacy_policy" element={<PrivacyPolicy />} />
        <Route
          exact
          path="/legal/terms_of_service"
          element={<TermsOfService />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
