import React from "react";
import * as S from "./styles";

import BeerIcon from "../../atoms/BeerIcon/BeerIcon";

const Intro = () => {
  return (
    <S.Section>
      <S.Content>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </S.Content>
      <S.Content>
        <BeerIcon />
      </S.Content>
    </S.Section>
  );
};

export default Intro;
