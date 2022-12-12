import React from "react";
import group from "./../../../../assets/Products/MinterImg/minter_home.png";
import particle from "./../../../../assets/Products/particles.png";
import { SMinterMain } from "./styles";

export default function MinterMain() {
  return (
    <SMinterMain>
      <div className="background"></div>
      <div className="mainWrap">
        <div className="left">
          <div className="title">
            <p>Minter</p> solution
          </div>
          <div className="text">
            The Minter, is a one-click service for simplified NFT minting of
            in-game items and its further tracking through a unique API. Users
            have the ability to create blockchain-based digital assets directly
            from the application, using their credit card that is connected to
            the app store.
          </div>
          <a href="/" className="bttn">
            Integrate Minter
          </a>
        </div>
        <div className="right">
          <div className="wrap">
            <img src={group} alt="" />
            <img className="particle1" src={particle} alt="" />
            <img className="particle2" src={particle} alt="" />
            <img className="particle3" src={particle} alt="" />
          </div>
        </div>
      </div>
    </SMinterMain>
  );
}
