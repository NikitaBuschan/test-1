import React from "react";
import HeaderDark from "../../../components/HeaderDark/HeaderDark";
import {
  SUseCases,
  UseCasesBlock,
  UseCasesEmpowerBlock,
  UseCasesGetStartedBlock,
  UseCasesMainBlock,
  UseCasesToolsBlock,
} from "./styles";

import capabilities from "../../../assets/images/Developers/capabilities.png";
import bgTop from "../../../assets/images/Developers/bgTop.png";

import stars from "../../../assets/images/Developers/stars2.png";

import c1 from "../../../assets/images/Developers/c1.png";
import c2 from "../../../assets/images/Developers/c2.png";
import c3 from "../../../assets/images/Developers/c3.png";
import FooterDark from "../../../components/FooterDark/FooterDark";

export default function UseCases() {
  return (
    <SUseCases>
      <HeaderDark />
      <main>
        <UseCasesMainBlock>
          <div className="stars" />
          <div className="wrap">
            <h1>APIs, SDKs and Innovative Tools</h1>
            <div className="desc">
              Interact enables to developers tools to integrate with any
              Blockchain and leverage the power of Web3 technology for their
              applications with flexible use cases and Zero Fees.{" "}
            </div>
            <a href="/" className="start">
              <p>Let's start</p>
            </a>
          </div>
        </UseCasesMainBlock>

        <UseCasesEmpowerBlock>
          <div className="wrap">
            <h1>Empower your Mobile Game App with Web3 capabilities</h1>
            <img src={capabilities} alt="" />
          </div>
        </UseCasesEmpowerBlock>

        <UseCasesToolsBlock>
          <img src={bgTop} className="bgTop" alt="" />
          <div className="content">
            <div className="stripes" />
            <img src={stars} className="stars" alt="" />
            <div className="wrap">
              <div className="left">
                <h1>Powerful APIs to empower Web3 capabilities</h1>
                <p>
                  Blockchains are highly secure and reliable networks for value
                  exchange but lack the functionality to natively fetch external
                  data or send data to off-chain systems in a manner that
                  retains end-to-end tamper-resistance.
                </p>
              </div>
              <div className="right">
                <h1>Valuable development tools for applications</h1>
                <p>
                  App developers face many barriers when trying to connect and
                  utilize blockchains for their applications. The challenges
                  they face are technological integration and a business
                  understanding of the web3 users.{" "}
                </p>
              </div>
            </div>
          </div>
        </UseCasesToolsBlock>

        <UseCasesBlock>
          <img src={stars} className="stars" alt="" />
          <div className="wrap">
            <div className="lines" />
            <div className="title">Use Cases</div>
            <div className="descr">
              Interact offers the most relevant development tools to
              entrepreneurs and builders to support the rapidly growing Web3
              applications.
            </div>
            <div className="cards">
              <div className="card">
                <img src={c1} alt="" className="prev" />
                <div className="category">
                  <p>CATEGORY</p>
                </div>
                <div className="text">
                  Aavegotchi is an open-source, <br /> community-owned NFT
                  gaming protocol, enabling true asset ownership for gamers.
                  Take me down the rabbit hole. What are
                </div>
                <a href="/" className="link">
                  <p>Read Case Study</p>
                  <div className="line" />
                </a>
              </div>
              <div className="card">
                <img src={c2} alt="" className="prev" />
                <div className="category">
                  <p>CATEGORY</p>
                </div>
                <div className="text">
                  Aavegotchi is an open-source, <br /> community-owned NFT
                  gaming protocol, enabling true asset ownership for gamers.
                  Take me down the rabbit hole. What are
                </div>
                <a href="/" className="link">
                  <p>Read Case Study</p>
                  <div className="line" />
                </a>
              </div>
              <div className="card">
                <img src={c3} alt="" className="prev" />
                <div className="category">
                  <p>CATEGORY</p>
                </div>
                <div className="text">
                  Aavegotchi is an open-source, <br /> community-owned NFT
                  gaming protocol, enabling true asset ownership for gamers.
                  Take me down the rabbit hole. What are
                </div>
                <a href="/" className="link">
                  <p>Read Case Study</p>
                  <div className="line" />
                </a>
              </div>
            </div>
          </div>
        </UseCasesBlock>

        <UseCasesGetStartedBlock>
          <div className="wrap">
            <div className="title">
              {" "}
              <span>Get started </span>
              with Syncer
            </div>
            <div className="descr">
              Explore our documentation to learn how you can track, monitor and
              sync assets from Blockchain to Server.
            </div>
            <a href="/" className="int">
              <p>Integrate now</p>
            </a>
          </div>
        </UseCasesGetStartedBlock>
      </main>
      <FooterDark />
    </SUseCases>
  );
}
