import React, { useState } from "react";
import Footer from "../../../components/Footer/Footer";
import HeaderDark from "../../../components/HeaderDark/HeaderDark";
import Markdown from "react-markdown";
import vacancieslist from "../../../vacancies.json";

import {
  CareersEcosystemBlock,
  CareersMainBlock,
  CareersPositionsBlock,
  CareersTalentBlock,
  SCareers,
} from "./styles";

import stroke from "../../../assets/images/Company/Careers/stroke.png";
import map from "../../../assets/images/Company/Careers/map.png";
import arrow from "../../../assets/images/Company/Careers/arrow.png";

import Home from "../../../assets/images/Company/Careers/Home.png";
import Location from "../../../assets/images/Company/Careers/Location.png";
import Clock from "../../../assets/images/Company/Careers/Clock.png";

import rightArrow from "../../../assets/images/Home/rightArrow.svg";

export default function Careers() {
  const [opened, setopened] = useState("");

  return (
    <SCareers>
      <HeaderDark />
      <main>
        <CareersMainBlock>
          <div className="stars" />
          <div className="wrap">
            <h1>A Team with Passion for Innovative Products</h1>
            <div className="desc">
              Deep expertise in Gaming, Web3, Blockchain and B2B solutions.
            </div>
            <a href="/" className="view">
              <p>View open positions</p>
            </a>
          </div>
        </CareersMainBlock>

        <CareersEcosystemBlock>
          <div className="wrap">
            <div className="left">
              <h1>
                Interact was founded by serial entrepreneurs & gaming experts to
                provide the plug and play infrastructure for{" "}
                <span>
                  web3 ecosystem.
                  <img src={stroke} className="line" alt="" />
                </span>
              </h1>
              <p>
                We provide developer tools to build, integrate and sync web3
                apps. Our solution is open-source, decentralized, and free of
                charge
              </p>
            </div>
            <img src={map} className="right" alt="" />
          </div>
        </CareersEcosystemBlock>

        <CareersPositionsBlock>
          <div className="wrap">
            <h1 className="title">Open positions</h1>
            <ul className="list">
              {vacancieslist.length &&
                vacancieslist.map(function (vacancie, i) {
                  if (i >= 6) {
                    return;
                  }
                  return (
                    <li
                      key={i}
                      className={opened == i ? "position" : "position closed"}
                    >
                      <div className="head" onClick={() => setopened(i)}>
                        <div className="info">
                          <div className="department">
                            <p>{vacancie.category}</p>
                          </div>
                          <div className="job">{vacancie.position}</div>
                        </div>
                        <img src={arrow} className="arrow" alt="" />
                      </div>
                      <div className="body">
                        <div className="top">
                          <div className="aspects">
                            <div className="loacation">
                              <img src={Home} alt="" />{" "}
                              <p>{vacancie.location}</p>
                            </div>
                            <div className="timezone">
                              <img src={Location} alt="" />{" "}
                              <p>{vacancie.timezone} Time Zone</p>
                            </div>
                            <div className="time">
                              <img src={Clock} alt="" />{" "}
                              <p>{vacancie.employment}</p>
                            </div>
                          </div>
                          <Markdown
                            className="text"
                            children={vacancie.content}
                            escapeHtml={false}
                          />
                        </div>
                        <a href={vacancie.link} className="apply">
                          <p>Apply now</p>
                          <img src={rightArrow} alt="rightArrow" />
                        </a>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </CareersPositionsBlock>

        <CareersTalentBlock>
          <div className="wrap">
            <h1 className="title">Haven’t found your role?</h1>
            <h2 className="subtitle">
              We’re always on the lookout for exceptional web3 talent.
            </h2>
            <p className="descr">
              Send us your resume and show your potential on how to bring value
              to web3 space. We’re waiting for you!
            </p>
            <a href="/" className="apply">
              <p>Apply now</p>
              <img src={rightArrow} alt="rightArrow" />
            </a>
          </div>
        </CareersTalentBlock>
      </main>
      <Footer />
    </SCareers>
  );
}
