import React, { useEffect, useState } from "react";
import { SPostsBlock } from "./styles";
import Markdown from "react-markdown";

import postlist from "../../posts.json";

export default function PostsBlock() {
  const [filter, setfilter] = useState("all");
  const [filteredList, setfilteredList] = useState(postlist);

  function truncate(data, len) {
    return data.split(" ").slice(0, len).join(" ") + "...";
  }

  function handleFiltration(filter) {
    setfilter(filter);

    if (filter === "all") {
      let l = postlist.map((x) => x);
      // console.log("filteredList:", l);
      setfilteredList(l);
    } else {
      function removeItem(list) {
        var i = 0;
        while (i < list.length) {
          if (list[i].category != filter) {
            list.splice(i, 1);
          } else {
            ++i;
          }
        }
        console.log(list);
        return list;
      }

      let list = postlist.map((x) => x);

      let filtered = removeItem(list);
      // console.log("filteredList:", filtered);
      setfilteredList(filtered);
    }
  }

  return (
    <SPostsBlock>
      <div className="wrap">
        <div className="top">
          <h1>Latest Posts</h1>
          <div className="navigate">
            <div
              className={
                filter === "all" ? "filterButton active" : "filterButton"
              }
              onClick={() => handleFiltration("all")}
            >
              All categories
            </div>
            <div
              className={
                filter === "community\r"
                  ? "filterButton active"
                  : "filterButton"
              }
              onClick={() => handleFiltration("community\r")}
            >
              Community
            </div>
            <div
              className={
                filter === "products\r" ? "filterButton active" : "filterButton"
              }
              onClick={() => handleFiltration("products\r")}
            >
              Products
            </div>
            <div
              className={
                filter === "knowledge\r"
                  ? "filterButton active"
                  : "filterButton"
              }
              onClick={() => handleFiltration("knowledge\r")}
            >
              Knowledge
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="large">
            {filteredList &&
              filteredList.map(function (post, i) {
                if (i >= 6) {
                  return;
                }
                return (
                  <a href="/" key={i} className="card">
                    <img src={post.thumbnail} alt="" />
                    <h3>{truncate(post.title, 9)}</h3>
                    <h2>
                      {post.date} · {post.read} min read
                    </h2>
                    <Markdown
                      children={truncate(post.content, 17)}
                      escapeHtml={false}
                    />
                  </a>
                );
              })}
          </div>
          <div className="small">
            {filteredList &&
              filteredList.map(function (post, i) {
                if (i <= 5 || i >= 9) {
                  return;
                }
                if (filter === "all") {
                  return (
                    <a href="/" key={i} className="card">
                      <img src={post.thumbnail} alt="" />
                      <div className="text">
                        <h3>{truncate(post.title, 5)}</h3>
                        <Markdown children={truncate(post.content, 6)} />
                      </div>
                    </a>
                  );
                }
                if (filter === post.category) {
                  return (
                    <a href="/" key={i} className="card">
                      <img src={post.thumbnail} alt="" />
                      <div className="text">
                        <h3>{truncate(post.title, 5)}</h3>
                        <Markdown children={truncate(post.content, 6)} />
                      </div>
                    </a>
                  );
                }
                return;
              })}
          </div>
        </div>
      </div>
    </SPostsBlock>
  );
}
