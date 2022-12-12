import React from "react";
import { SReadingBlock } from "./styles";

import cmeta from "../../../assets/images/Home/cmeta.png";
import cfb from "../../../assets/images/Home/cfb.png";
import cico from "../../../assets/images/Home/cico.png";

export default function ReadingBlock() {
  return (
    <SReadingBlock>
      <div className="wrap">
        <h1>Recommended Reading</h1>
        <div className="desc">
          Learn more about Interact architecture and how we increase
          accessibility to the Web3.
        </div>
        <div className="cards">
          <div className="large">
            <a href="/" className="card">
              <img src={cmeta} alt="" />
              <h3>
                Facebook and Instagram Activate NFTs <br /> for US Users
              </h3>
              <p>
                Major toy manufacturing company Mattel <br /> announced the
                launch of the official Masters of the <br /> Universe (MOTU)
                digital collection in collaboration with the non-fungible token
                (NFT)-native
              </p>
            </a>
            <a href="/" className="card">
              <img src={cfb} alt="" />
              <h3>
                Everyone on @instagram and <br /> @facebook can now share their
                digital collectibles in the US, and on In
              </h3>
              <p>
                Major toy manufacturing company Mattel <br /> announced the
                launch of the official Masters of the <br /> Universe (MOTU)
                digital collection in collaboration with the non-fungible token
                (NFT)-native
              </p>
            </a>
          </div>
          <div className="small">
            <a href="/" className="card">
              <img src={cico} alt="" />
              <div className="text">
                <h3>
                  Beyond the Hype: Real- <br /> World NFT Use Cases That Would
                  Benefit Society
                </h3>
                <p>
                  Major toy manufacturing <br /> company Mattel announced the
                  launch of the official Masters of the Universe (MOTU) digital
                  collection in collaboration with the non-fungible token
                  (NFT)-native
                </p>
              </div>
            </a>
            <a href="/" className="card">
              {" "}
              <img src={cico} alt="" />
              <div className="text">
                <h3>
                  Beyond the Hype: Real- <br /> World NFT Use Cases That Would
                  Benefit Society
                </h3>
                <p>
                  Major toy manufacturing <br /> company Mattel announced the
                  launch of the official Masters of the Universe (MOTU) digital
                  collection in collaboration with the non-fungible token
                  (NFT)-native
                </p>
              </div>
            </a>
            <a href="/" className="card">
              {" "}
              <img src={cico} alt="" />
              <div className="text">
                <h3>
                  Beyond the Hype: Real- <br /> World NFT Use Cases That Would
                  Benefit Society
                </h3>
                <p>
                  Major toy manufacturing <br /> company Mattel announced the
                  launch of the official Masters of the Universe (MOTU) digital
                  collection in collaboration with the non-fungible token
                  (NFT)-native
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </SReadingBlock>
  );
}
