import React from "react";
import img1 from "./../../../../assets/Products/SyncerImg/cases1.png";
import img2 from "./../../../../assets/Products/SyncerImg/cases2.png";
import img3 from "./../../../../assets/Products/SyncerImg/cases3.png";
import { SSyncerCases } from "./styles";

export default function SyncerCases() {
  return (
    <SSyncerCases>
      <div className="casesWrap">
        <div className="title">Syncer Use Cases</div>
        <div className="blocks">
          <div className="block">
            <img src={img1} alt="" />
            <div className="text">
              <h1>How to integrate Syncer?</h1>

              <p>
                You have a magic item object stored in a smart contract. You
                also have a marketplace with a million of these items, with the
                ability to filter by durability. Your actions?
              </p>
            </div>
          </div>

          <div className="block">
            <img src={img2} alt="" />
            <div className="text">
              <h1>24\7 Syncing and monitoring</h1>
              <p>
                First of all, you should collect somewhere all the items with
                their current durability. Now you are probably thinking "How do
                I know what these items are now?".
              </p>
            </div>
          </div>
          <div className="block">
            <img src={img3} alt="" />
            <div className="text">
              <h1>24\7 dAssets tracking</h1>
              <p>
                Without a Syncer, you just have to go through each item with the
                getItem() method and get the durability from there. But I think
                it’s clear that by the time you process all the items, quite a
                few days will pass.
              </p>
            </div>
          </div>
        </div>
        <div className="footerImg"></div>
      </div>
    </SSyncerCases>
  );
}
