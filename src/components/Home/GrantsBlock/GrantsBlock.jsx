import React from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../../helpers/scrollToTop";
import { SGrantsBlock } from "./styles";

import rightArrow from "../../../assets/images/Home/rightArrow.svg";
import gr from "../../../assets/images/Home/gr.png";

export default function GrantsBlock() {
  return (
    <SGrantsBlock>
      <div className="wrap">
        <img src={gr} className="left" alt="" />
        <div className="right">
          <h1>Grants Program</h1>
          <div className="descr">
            In support of our mission, InteractWith grants program funds
            entrepreneurs, developers, and marketers in the field of Web3
            adoption.
          </div>
          <Link
            to={"/community/grants"}
            className="explore"
            onClick={() => scrollToTop()}
          >
            <div className="text">Explore now</div>
            <img src={rightArrow} alt="" />
          </Link>
        </div>
      </div>
    </SGrantsBlock>
  );
}
