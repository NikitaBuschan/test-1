import React from "react";
import img1 from "./../../../../assets/Products/MinterImg/image 322.png";
import img2 from "./../../../../assets/Products/MinterImg/image 323.png";
import img3 from "./../../../../assets/Products/MinterImg/image 324.png";
import { SMinterCases } from "./styles";

export default function MinterCases() {
  return (
    <SMinterCases>
      <div className="casesWrap">
        <div className="title">Minter Use Cases</div>
        <div className="blocks">
          <div className="block">
            <img src={img1} alt="" />
            <div className="text">
              Imagine a Minecraft player, let's call him John. John has obtained
              a rare dragon egg and wants to sell it for $100. John can now mint
              the dragon egg to any blockchain and list it for sale on secondary
              markets.
            </div>
          </div>
          <div className="block">
            <img src={img2} alt="" />
            <div className="text">
              Imagine a Fortnite player, let's call her Inna. Inna has just won
              the Fortnite championship and wants to sell the rifle she used.
              Inna can now mint the rifle as a digital asset to any blockchain
              and auction it to her fans.
            </div>
          </div>
          <div className="block">
            <img src={img3} alt="" />
            <div className="text">
              After 12 years of playing Pokemon, Sara decides she doesn’t want
              to play anymore but has a highly valuable collection of rare
              Pokemons. Sara can now mint them as digital assets and sell them
              to the highest bidder.
            </div>
          </div>
        </div>
        <div className="footerImg"></div>
      </div>
    </SMinterCases>
  );
}
