import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SHeader } from "./styles";
import scrollToTop from "../../helpers/scrollToTop";

import logo from "../../assets/images/Header/logo.png";
import twitter from "../../assets/images/Header/twitter.png";
import telegram from "../../assets/images/Header/telegram.png";
import gitbook from "../../assets/images/Header/gitbook.png";
import arrow from "../../assets/images/Header/arrow.png";
import minter from "../../assets/images/Header/minter.png";
import web3auth from "../../assets/images/Header/web3auth.png";
import datasyncer from "../../assets/images/Header/datasyncer.png";
import interactwallet from "../../assets/images/Header/interactwallet.png";
import docs from "../../assets/images/Header/docs.png";
import trydemo from "../../assets/images/Header/trydemo.png";
import usecases from "../../assets/images/Header/usecases.png";
import careers from "../../assets/images/Header/careers.png";
import blog from "../../assets/images/Header/blog.png";
import grants from "../../assets/images/Header/grants.png";
import partnerships from "../../assets/images/Header/partnerships.png";

export default function Header() {
  const [opened, setopened] = useState("");

  return (
    <SHeader onMouseLeave={() => setopened("")}>
      <div className="wrapper">
        <Link to={"/"} className="logo" onClick={() => scrollToTop()}>
          <img src={logo} alt="" />
        </Link>
        <div className="socials">
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="/">
            <img src={telegram} alt="telegram" />
          </a>
          <a href="/">
            <img src={gitbook} alt="gitbook" />
          </a>
        </div>
        <nav>
          <button>
            <div
              className={"title"}
              onClick={() =>
                opened === "Products" ? setopened("") : setopened("Products")
              }
            >
              <p>Products</p>
              <img
                className={opened === "Products" ? "opened" : ""}
                src={arrow}
                alt=""
              />
            </div>
            <ul
              className={opened === "Products" ? "products" : "products hidden"}
            >
              <NavLink to={"/products/minter"}>
                <img src={minter} alt="minter" />
                <p>Minter</p>
              </NavLink>
              <NavLink to={"/products/web3_auth"}>
                <img src={web3auth} alt="web3auth" />
                <p>Web3 Auth</p>
              </NavLink>
              <NavLink to={"/products/syncer"}>
                <img src={datasyncer} alt="datasyncer" />
                <p>Data Syncer</p>
              </NavLink>
              <NavLink to={"/products/interact_wallet"}>
                <img src={interactwallet} alt="interactwallet" />
                <p>InteractWallet</p>
              </NavLink>
            </ul>
          </button>
          <button>
            <div
              className="title"
              onClick={() =>
                opened === "Developers"
                  ? setopened("")
                  : setopened("Developers")
              }
            >
              <p>Developers</p>
              <img
                className={opened === "Developers" ? "opened" : ""}
                src={arrow}
                alt=""
              />
            </div>
            <ul
              className={
                opened === "Developers" ? "developers" : "developers hidden"
              }
            >
              <a href="/">
                <img src={docs} alt="docs" />
                <p>Docs</p>
              </a>
              <a href="/">
                <img src={trydemo} alt="trydemo" />
                <p>Try demo</p>
              </a>
              <NavLink to={"/developers/use_cases"}>
                <img src={usecases} alt="usecases" />
                <p>Use Cases</p>
              </NavLink>
            </ul>
          </button>
          <button>
            <div
              className="title"
              onClick={() =>
                opened === "Company" ? setopened("") : setopened("Company")
              }
            >
              <p>Company</p>
              <img
                className={opened === "Company" ? "opened" : ""}
                src={arrow}
                alt=""
              />
            </div>
            <ul className={opened === "Company" ? "company" : "company hidden"}>
              <NavLink to={"/company/careers"}>
                <img src={careers} alt="careers" />
                <p>Careers</p>
              </NavLink>
              <NavLink to={"/company/blog"}>
                <img src={blog} alt="blog" />
                <p>Blog</p>
              </NavLink>
            </ul>
          </button>
          <button>
            <div
              className="title"
              onClick={() =>
                opened === "Community" ? setopened("") : setopened("Community")
              }
            >
              <p>Community</p>
              <img
                className={opened === "Community" ? "opened" : ""}
                src={arrow}
                alt=""
              />
            </div>
            <ul
              className={
                opened === "Community" ? "community" : "community hidden"
              }
            >
              <NavLink to={"/community/grants"}>
                <img src={grants} alt="grants" />
                <p>Grants</p>
              </NavLink>
              <a href="/">
                <img src={partnerships} alt="partnerships" />
                <p>Partnerships</p>
              </a>
            </ul>
          </button>
          <a href="/" className="try">
            <p>Try demo</p>
          </a>
        </nav>
      </div>
    </SHeader>
  );
}
