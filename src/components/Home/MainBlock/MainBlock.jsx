import React from "react";
import { SMainBlock } from "./styles";

import document from "../../../assets/images/Home/Document.svg";
import rightArrow from "../../../assets/images/Home/rightArrow.svg";

import tnyt from "../../../assets/images/Home/tnyt.png";
import tc from "../../../assets/images/Home/tc.png";
import forbes from "../../../assets/images/Home/f.png";
import w3 from "../../../assets/images/Home/w3.png";

import prev from "../../../assets/images/Home/prev.png";
import blur from "../../../assets/images/Home/blur.png";

export default function MainBlock() {
  return (
    <SMainBlock>
      <div className="top">
        <div className="left">
          <h1>Connecting apps </h1>
          <h2>to blockchains</h2>
          <p className="discr">
            A free to use, plug and play service, empowering your app with web3
            capabilities. We harness powerful APIs, SDKs and innovative tools to
            enable your users to InteractWith any blockchain.
          </p>
          <div className="buttonBlock">
            <a href="/" className="try">
              <p>Try demo</p>
              <img src={rightArrow} alt="rightArrow" />
            </a>
            <a href="/" className="view">
              <img src={document} alt="document" />
              <div>
                <p>View docs</p>
                <div className="line"></div>
              </div>
            </a>
          </div>
        </div>
        <div className="right">
          <img src={prev} alt="" />
        </div>
      </div>
      <div className="bot">
        <img src={tnyt} alt="tnyt" />
        <img src={tc} alt="tc" />
        <img src={forbes} alt="forbes" />
        <img src={w3} alt="w3" />
      </div>

      <img src={blur} alt="blur" className="blur" />
    </SMainBlock>
  );
}
