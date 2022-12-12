import React from "react";

import left from "./../../../../assets/Products/SyncerImg/syncer.png";
import { SSyncerMain } from "./styles";

export default function SyncerMain() {
  return (
    <SSyncerMain>
      <div className="background"></div>
      <div className="mainWrap">
        <div className="left">
          <div className="title">
            <p>Data</p> Syncer
          </div>
          <div className="text">
            Our Syncer solution developed as a multichain compatible (not only
            EVM) with flexible architecture to deal with delegated indexing of
            various blockchain networks.
          </div>
          <a href="/" className="bttn">
            Integrate Syncer
          </a>
        </div>
        <div className="right">
          <div className="wrap">
            <img src={left} alt="" />
          </div>
        </div>
      </div>
    </SSyncerMain>
  );
}
