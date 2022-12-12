import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { SHome } from "./styles";

import MainBlock from "../../components/Home/MainBlock/MainBlock";
import ConnectBlock from "../../components/Home/ConnectBlock/ConnectBlock";
import MonetizationBlock from "../../components/Home/MonetizationBlock/MonetizationBlock";
import APIsBlock from "../../components/Home/APIsBlock/APIsBlock";
import InfrastructureBlock from "../../components/Home/InfrastructureBlock/InfrastructureBlock";
import ArchirtectureBlock from "../../components/Home/ArchirtectureBlock/ArchirtectureBlock";
import ProductsBlock from "../../components/Home/ProductsBlock/ProductsBlock";
import AccesBlock from "../../components/Home/AccesBlock/AccesBlock";
import GrantsBlock from "../../components/Home/GrantsBlock/GrantsBlock";
import ReadingBlock from "../../components/Home/ReadingBlock/ReadingBlock";

export default function Home() {
  return (
    <SHome>
      <Header />
      <main>
        <MainBlock />
        <ConnectBlock />
        <MonetizationBlock />
        <APIsBlock />

        <div className="bgDark">
          <div className="stripes" />
          <InfrastructureBlock />
          <ArchirtectureBlock />
          <ProductsBlock />
        </div>
        <AccesBlock />
        <GrantsBlock />
        <ReadingBlock />
      </main>
      <Footer />
    </SHome>
  );
}
