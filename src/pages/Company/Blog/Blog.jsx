import React from "react";
import FeaturedNewsBlock from "../../../components/FeaturedNewsBlock/FeaturedNewsBlock";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import PostsBlock from "../../../components/PostsBlock/PostsBlock";
import { SBlog } from "./styles";
import postlist from "../../../posts.json";

export default function Blog() {
  const excerptList = postlist.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ") + "...";
  });
  return (
    <SBlog>
      <Header />
      <FeaturedNewsBlock excerptList={excerptList} />
      <PostsBlock excerptList={excerptList} />
      <Footer />
    </SBlog>
  );
}
