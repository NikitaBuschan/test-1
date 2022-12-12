import React from "react";
import top_line from "./../../../../assets/Products/WebAuthImg/top_lines.png";
import bot_line from "./../../../../assets/Products/WebAuthImg/bot_lines.png";
import left from "./../../../../assets/Products/WebAuthImg/left.png";
import right from "./../../../../assets/Products/WebAuthImg/right.png";
import particle from "./../../../../assets/Products/particles.png";
import { SWeb3Main } from "./styles";

export default function Web3AuthMain() {
  return (
    <SWeb3Main>
      <div className="background"></div>
      <div className="mainWrap">
        <div className="left">
          <div className="title">
            <p>Web3</p> Auth
          </div>
          <div className="text">
            An open and free tool that allows you to quickly integrate wallet
            authorization into your application without the need to install
            modules.
          </div>
          <a href="/" className="bttn">
            Integrate Web3 Auth
          </a>
        </div>
        <div className="right">
          <div className="wrap">
            <img className="web3card" src={left} alt="" />
            <img className="web3card" src={right} alt="" />
            <img className="top_line" src={top_line} alt="" />
            <img className="bot_line" src={bot_line} alt="" />
            <img className="particle1" src={particle} alt="" />
            <img className="particle2" src={particle} alt="" />
          </div>
        </div>
      </div>
    </SWeb3Main>
  );
}
