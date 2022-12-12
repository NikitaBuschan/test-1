import React, { useState } from "react";
import { SAPIsBlock } from "./styles";

import minter from "../../../assets/images/Home/minter.png";
import syncer from "../../../assets/images/Home/syncer.png";
import web3auth from "../../../assets/images/Home/web3auth.png";
import interact from "../../../assets/images/Home/interact.png";

export default function APIsBlock() {
  const [activeLi, setactiveLi] = useState("first");

  function getImg() {
    switch (activeLi) {
      case "first":
        return <img src={minter} alt="" />;
      case "second":
        return <img src={syncer} alt="" />;
      case "third":
        return <img src={web3auth} alt="" />;
      case "fourth":
        return <img src={interact} alt="" />;
      default:
        return <img src={minter} alt="" />;
    }
  }
  return (
    <SAPIsBlock>
      <div className="bg">
        <div className="stars" />
        <div className="apiBGtop" />
      </div>
      <div className="wrap">
        <ul className="left">
          <li
            className={activeLi !== "first" ? "hidden" : "active1"}
            onClick={() => setactiveLi("first")}
          >
            <div className="line" />
            <div className="content">
              <div className="head">
                <h3>Minter</h3>
              </div>
              <div className="descr">
                <p>
                  Our proprietary technology allows users of integrated apps to
                  mint their in-game assets to the blockchain, effectively
                  securing their ownership over them forever and allowing them
                  to expand their interoperable digital identity.
                </p>
              </div>
            </div>
          </li>
          <li
            className={activeLi !== "second" ? "hidden" : "active2"}
            onClick={() => setactiveLi("second")}
          >
            <div className="line" />
            <div className="content">
              <div className="head">
                <h3>Data Syncer </h3>
              </div>
              <div className="descr">
                <p>
                  A perpetual synchronization between your apps centralized
                  databases and public decentralized databases, providing your
                  app with new business models and monetization tools.
                </p>
              </div>
            </div>
          </li>
          <li
            className={activeLi !== "third" ? "hidden" : "active3"}
            onClick={() => setactiveLi("third")}
          >
            <div className="line" />
            <div className="content">
              <div className="head">
                <h3>Web3 Auth</h3>
              </div>
              <div className="descr">
                <p>
                  Empowering app developers with a new layer of actionable data
                  on their users by allowing users to sign in with their web3
                  digital identity. Visibility into users blockchain
                  interactions, past balances, holdings of DeFi and NFTs,
                  providing better user segmentation and leading to better
                  monetization for app developers.
                </p>
              </div>
            </div>
          </li>
          <li
            className={activeLi !== "fourth" ? "hidden" : "active4"}
            onClick={() => setactiveLi("fourth")}
          >
            <div className="line" />
            <div className="content">
              <div className="head">
                <h3>InteractWallet</h3>
              </div>
              <div className="descr">
                <p>One-click wallet creation system </p>
              </div>
            </div>
          </li>
        </ul>

        <div className="right">{getImg()}</div>
      </div>
    </SAPIsBlock>
  );
}
