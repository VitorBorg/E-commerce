import React from "react";
import Info from "../../components/organisms/Info";
import Intro from "../../components/organisms/Intro";
import ProductsGrid from "../../components/organisms/ProductsGrid";
import ProductsCategory from "../../components/organisms/ProductsCategory/index";
import * as C from "./styles";

const Home = () => {
  return (
    <C.Container>
      <Intro />
      <Info />
      <ProductsGrid />
      <ProductsCategory />
    </C.Container>
  );
};

export default Home;
