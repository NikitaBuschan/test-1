import React from "react";
import { SSyncerGetStarted } from "./styles";

export default function SyncerGetStarted() {
  return (
    <SSyncerGetStarted>
      <div className="background"></div>

      <div className="lines"></div>

      <div className="getStartedWrap">
        <div className="title">
          <h1>Get started</h1>
          <h2>with Syncer</h2>
        </div>
        <p>
          Explore our documentation to learn how you can track, monitor and sync
          assets from Blockchain to Server.
        </p>
        <a href="/" className="bttn">
          Integrate now
        </a>
      </div>
    </SSyncerGetStarted>
  );
}
