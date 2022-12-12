import React from "react";
import { SIntegrationProgramBlock } from "./styles";

import integrProgram from "../../../assets/images/Grants/integrProgram.png";
import { Link } from "react-router-dom";
import scrollToTop from "../../../helpers/scrollToTop";

export default function IntegrationProgramBlock() {
  return (
    <SIntegrationProgramBlock>
      <div className="wrap">
        <div className="left">
          <h1 className="title">Integration Program</h1>
          <p className="descr">
            Integration program support projects and teams worldwide which
            support InteractWith network by integrating and expanding our
            vision.
          </p>
          <Link
            to={"/community/grants/integration_program"}
            className="apply"
            onClick={() => scrollToTop()}
          >
            <p>Apply now</p>
          </Link>
        </div>
        <img src={integrProgram} alt="" className="right" />
      </div>
    </SIntegrationProgramBlock>
  );
}
