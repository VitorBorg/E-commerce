import React from "react";
import Info from "../../components/organisms/Info";
import Intro from "../../components/organisms/Intro";
import * as C from "./styles";

const Home = () => {
  return (
    <C.Container>
      <Intro />
      <Info />
    </C.Container>
  );
};

export default Home;
