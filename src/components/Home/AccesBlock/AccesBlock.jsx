import React from "react";
import { SAccesBlock } from "./styles";

import mc from "../../../assets/images/Home/mc.png";
import zf from "../../../assets/images/Home/zf.png";
import check_circle from "../../../assets/images/Home/check_circle.png";
import rightArrow from "../../../assets/images/Home/rightArrow.svg";

export default function AccesBlock() {
  return (
    <SAccesBlock>
      <div className="bg" />
      <div className="wrap">
        <div className="left">
          <div className="line">
            <div>
              <img src={zf} alt="" />
            </div>
            <h1>Zero fees.</h1>
          </div>
          <div className="line">
            <div>
              <img src={mc} alt="" />
            </div>
            <h1>Max capabilities.</h1>
          </div>
        </div>
        <div className="right">
          <h1>
            <span>Free</span> Access Infrastructure
            <div className="line" />
          </h1>
          <ul>
            <li>
              <img src={check_circle} alt="" />
              <p>No integration fees.</p>
            </li>
            <li>
              <img src={check_circle} alt="" />
              <p>Free API calls</p>
            </li>
            <li>
              <img src={check_circle} alt="" />
              <p>No set up payment</p>
            </li>
          </ul>
          <a href="/" className="try">
            <div className="text">Try demo</div>
            <img src={rightArrow} alt="" />
          </a>
          <p className="descr">
            We may create optional advanced features which you can decide to pay
            for in the <br /> future. <br /> We will always be transparent and
            clear about any paid features in advance.
          </p>
        </div>
      </div>
    </SAccesBlock>
  );
}
