import React, { Component } from "react";
import Slider from "react-slick";
import { StyledSlide } from "./styles";
import Markdown from "react-markdown";

import postlist from "../../../posts.json";

export default class BlogSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
  }
  next() {
    this.slider.slickNext();
  }

  render() {
    const excerptList = postlist.map((post) => {
      return post.content.split(" ").slice(0, 20).join(" ") + "...";
    });
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "ease-in-out",
      dots: true,
      arrows: false,
      dotsClass: "slick-dots",
    };

    return (
      <Slider ref={(c) => (this.slider = c)} {...settings}>
        {postlist.length &&
          postlist.map((post, i) => (
            <StyledSlide key={i}>
              <div className="block" onClick={this.next}>
                <div className="left">
                  <img src={post.thumbnail} alt="" />
                </div>
                <div className="right">
                  <h1>{post.title}</h1>
                  <h2>
                    {post.date} · {post.read} min read
                  </h2>

                  <Markdown children={excerptList[i]} />
                </div>
              </div>
            </StyledSlide>
          ))}
      </Slider>
    );
  }
}
