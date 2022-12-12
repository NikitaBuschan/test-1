import React from "react";
import { SCommunityProgramBlock } from "./styles";

import communityProgram from "../../../assets/images/Grants/communityProgram.png";
import scrollToTop from "../../../helpers/scrollToTop";
import { Link } from "react-router-dom";

export default function CommunityProgramBlock() {
  return (
    <SCommunityProgramBlock>
      <div className="wrap">
        <img src={communityProgram} alt="" className="left" />
        <div className="right">
          <h1 className="title">Community Program</h1>
          <p className="descr">
            Community program encourage individuals, companies and projects
            which experience in building, creating and engaging with world wide
            communities in various medias.
          </p>
          <Link
            to={"/community/grants/community_program"}
            className="apply"
            onClick={() => scrollToTop()}
          >
            <p>Apply now</p>
          </Link>
        </div>
      </div>
    </SCommunityProgramBlock>
  );
}
