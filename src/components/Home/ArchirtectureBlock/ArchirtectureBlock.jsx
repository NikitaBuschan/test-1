import React from "react";
import { SArchirtectureBlock } from "./styles";

import rightArrow from "../../../assets/images/Home/rightArrow.svg";
import arch from "../../../assets/images/Home/arch.png";

export default function ArchirtectureBlock() {
  return (
    <SArchirtectureBlock>
      <img src={arch} className="left" alt="" />
      <div className="right">
        <div className="bg" />
        <h1>
          Building a core architecture <br /> for any use case
        </h1>
        <p>
          By creating APIs and SDKs, developers are able to bring powerful Web3
          capabilities to their Apps{" "}
          <span>
            without the need of Blockchain development knowledge.
            <div className="line" />
          </span>
        </p>
        <a href="/" className="learn">
          <div className="text">Learn more</div>
          <img src={rightArrow} alt="" />
        </a>
      </div>
    </SArchirtectureBlock>
  );
}
