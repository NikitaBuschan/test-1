import React from "react";
import { Link } from "react-router-dom";
import { SFooterDark } from "./styles";

import logo from "../../assets/images/Footer/logo.png";
import twitter from "../../assets/images/Footer/twitter.png";
import telegram from "../../assets/images/Footer/telegram.png";
import gitbook from "../../assets/images/Footer/gitbook.png";

import scrollToTop from "../../helpers/scrollToTop";

export default function FooterDark() {
  return (
    <SFooterDark>
      <div className="bg_bot">
        <div className="bg_top"></div>
      </div>

      <div className="wraper">
        <div className="top">
          <div className="left">
            <Link to={"/"} className="logo" onClick={() => scrollToTop()}>
              <img src={logo} alt="logo" />
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
            <a href="/" className="try">
              <p>Try demo</p>
            </a>
          </div>
          <nav className="right">
            <div className="products">
              <h2 className="subtitle">Products</h2>
              <Link
                className="link"
                to={"/products/minter"}
                onClick={() => scrollToTop()}
              >
                Minter
              </Link>
              <Link
                className="link"
                to={"/products/syncer"}
                onClick={() => scrollToTop()}
              >
                Syncer
              </Link>
              <Link
                className="link"
                to={"/products/web3_auth"}
                onClick={() => scrollToTop()}
              >
                Web3 Auth
              </Link>
              <Link
                className="link"
                to={"/products/interact_wallet"}
                onClick={() => scrollToTop()}
              >
                InteractWallet
              </Link>
            </div>
            <div className="developers">
              <h2 className="subtitle">Developers</h2>
              <a className="link" href="/">
                Docs
              </a>
              <a className="link" href="/">
                Try Demo
              </a>
              <Link
                className="link"
                to={"/developers/use_cases"}
                onClick={() => scrollToTop()}
              >
                Use Cases
              </Link>
            </div>
            <div className="company">
              <h2 className="subtitle">Company</h2>
              <Link
                className="link"
                to={"/company/careers"}
                onClick={() => scrollToTop()}
              >
                Careers
              </Link>
              <Link
                className="link"
                to={"/company/blog"}
                onClick={() => scrollToTop()}
              >
                Blog
              </Link>
            </div>
            <div className="community">
              <h2 className="subtitle">Community</h2>
              <Link
                className="link"
                to={"/community/grants"}
                onClick={() => scrollToTop()}
              >
                Grants
              </Link>
              <a className="link" href="/">
                Partnerships
              </a>
            </div>
            <div className="legal">
              <h2 className="subtitle">Legal</h2>
              <Link
                className="link"
                to={"/legal/privacy_policy"}
                onClick={() => scrollToTop()}
              >
                Privacy Policy
              </Link>
              <Link
                className="link"
                to={"/legal/terms_of_service"}
                onClick={() => scrollToTop()}
              >
                Terms of Service
              </Link>
            </div>
          </nav>
        </div>
        <div className="bottom">
          <div className="line" />
          <h5 className="copyright">
            © 2022 InteractWith. all rights reserved
          </h5>
        </div>
      </div>
    </SFooterDark>
  );
}
