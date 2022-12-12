import React from "react";
import BlogSlider from "./Slider/BlogSlider";

import { SFeaturedNewsBlock } from "./styles";

export default function FeaturedNewsBlock() {
  return (
    <SFeaturedNewsBlock>
      <div className="background"></div>
      <div className="wrapper">
        <h1>Featured News</h1>
        <div className="slide">
          <BlogSlider />
        </div>
      </div>
    </SFeaturedNewsBlock>
  );
}
