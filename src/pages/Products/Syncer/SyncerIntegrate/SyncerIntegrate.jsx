import React from "react";
import img1 from "./../../../../assets/Products/SyncerImg/top.png";
import img2 from "./../../../../assets/Products/SyncerImg/bot.png";
import { SSyncerIntegrate } from "./styles";

export default function SyncerIntegrate() {
  return (
    <SSyncerIntegrate>
      <div className="background"></div>
      <div className="wrap">
        <div className="stars" />
        <div className="top">
          <div className="left">
            <h1>How to integrate?</h1>
            <h2>Simplified example for browsers using bundlers.</h2>
            <p>
              In the example, we track any changes of the owner of some abstract
              item. What happens after running this piece of code? The module
              will go through all the events in the contract starting from the
              block on which this contract was deployed and will execute the
              listener for each event in parallel mode. The last argument to
              each handler is the event metadata. I will not consider each field
              in the metadata, because their names speak for themselves, but I
              will tell you only about the global_index
            </p>
          </div>
          <div className="right">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="bot">
          <div className="left">
            <img src={img2} alt="" />
          </div>
          <div className="right">
            <h1>Syncer architecture for monitoring assets movements</h1>
            <p>
              Based on the diagram, it can be understood that Syncer is
              constantly listening to contracts that the client indicates to him
              for new events. When a new event appears, it is stored in a queue
              for processing, from which they then go to the client. Everything
              is extremely simple.
            </p>
          </div>
        </div>
      </div>
    </SSyncerIntegrate>
  );
}
