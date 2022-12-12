import React from "react";
import { SBusinessProgramBlock } from "./styles";

import businessProgram from "../../../assets/images/Grants/businessProgram.png";
import scrollToTop from "../../../helpers/scrollToTop";
import { Link } from "react-router-dom";

export default function BusinessProgramBlock() {
  return (
    <SBusinessProgramBlock>
      <div className="wrap">
        <div className="left">
          <h1 className="title">Business Program</h1>
          <p className="descr">
            Business program is dedicated to meet InteractWith vision and goals
            by collaborating, partnering and increase our networking globally.
          </p>
          <Link
            to={"/community/grants/business_program"}
            className="apply"
            onClick={() => scrollToTop()}
          >
            <p>Apply now</p>
          </Link>
        </div>
        <img src={businessProgram} alt="" className="right" />
      </div>
    </SBusinessProgramBlock>
  );
}
