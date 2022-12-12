import React from "react";
import img1 from "./../../../../assets/Products/WalletImg/cases1.png";
import img2 from "./../../../../assets/Products/WalletImg/cases2.png";
import img3 from "./../../../../assets/Products/WalletImg/cases3.png";
import { SInteractWalletCases } from "./styles";

export default function InteractWalleCases() {
  return (
    <SInteractWalletCases>
      <div className="casesWrap">
        <div className="title">InteractWallet Use Cases</div>
        <div className="blocks">
          <div className="block">
            <img src={img1} alt="" />
            <div className="text">
              <h1>Check out with InteractWallet</h1>

              <p>
                The user can choose to mint the digital asset directly to
                InteractWallet whether if he already has an address or need to
                generate a new one.
              </p>
            </div>
          </div>

          <div className="block">
            <img src={img2} alt="" />
            <div className="text">
              <h1>New address is generated</h1>
              <p>
                In case of a new InteractWallet address, our innovative secured
                API generate a new address to any Blockchain the user decide.
              </p>
            </div>
          </div>
          <div className="block">
            <img src={img3} alt="" />
            <div className="text">
              <h1>Privacy Secured</h1>
              <p>
                The user receive a privately notification regards his wallet
                address and key phase with 3 steps to login and hold the new
                NFT.
              </p>
            </div>
          </div>
        </div>
        <div className="footerImg"></div>
      </div>
    </SInteractWalletCases>
  );
}
