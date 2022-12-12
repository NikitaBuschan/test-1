import React from "react";
import { SIWGrantsProg } from "./styles";

export default function IWGrantsProg() {
  return (
    <SIWGrantsProg>
      <div className="titleProg">
        <div className="wrapp">
          <div className="titleText">
            <h1>InteractWith</h1>
            <h2>Grant Programs</h2>
          </div>
          <div>
            <p className="titleTextContent">
              InteractWith grant programs is dedicated for web3 contributors.
              The grants are awarded for projects or individuals who intend to
              build, scale and grow their initiatives on the Blockchain.
            </p>
          </div>

          <a href="/" className="apply">
            <p>Apply now</p>
          </a>
        </div>
      </div>
    </SIWGrantsProg>
  );
}
