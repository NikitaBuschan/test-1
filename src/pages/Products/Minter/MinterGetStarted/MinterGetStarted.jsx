import React from "react";
import particle from "./../../../../assets/Products/particle.png";
import { SMinterGetStarted } from "./styles";
export default function MinterGetStarted() {
  return (
    <SMinterGetStarted>
      <div className="background"></div>
      <div className="lines"></div>
      <div className="getStartedWrap">
        <div className="title">
          <h1>Get started</h1>
          <h2>with the Minter</h2>
        </div>
        <p>
          Explore our documentation to learn how you can bring more values to
          your users with our Minter solution.
        </p>
        <a href="/" className="bttn">
          Integrate now
        </a>
      </div>
    </SMinterGetStarted>
  );
}
