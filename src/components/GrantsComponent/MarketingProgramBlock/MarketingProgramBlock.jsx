import React from "react";
import { SMarketingProgramBlock } from "./styles";

import marketingProgram from "../../../assets/images/Grants/marketingProgram.png";
import scrollToTop from "../../../helpers/scrollToTop";
import { Link } from "react-router-dom";

export default function MarketingProgramBlock() {
  return (
    <SMarketingProgramBlock>
      <div className="wrap">
        <img src={marketingProgram} alt="" className="left" />
        <div className="right">
          <h1 className="title">Marketing Program</h1>
          <p className="descr">
            Marketing program support marketers worldwide with global reach by
            leveraging their social media channels, PR experience, affiliation
            and other marketing skills.
          </p>
          <Link
            to={"/community/grants/marketing_program"}
            className="apply"
            onClick={() => scrollToTop()}
          >
            <p>Apply now</p>
          </Link>
        </div>
      </div>
    </SMarketingProgramBlock>
  );
}
