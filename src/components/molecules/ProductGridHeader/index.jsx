import React from "react";
import * as S from "./styles";

import TitleCategories from "../../atoms/TitleCategories/index";

const ProductGridHeader = () => {
  return (
    <S.Section>
      <TitleCategories>Products</TitleCategories>
      <S.Filters>
        <a>All</a>
        <a>Best Sellers</a>
        <p>Low Price</p>
        <p>High Price</p>
      </S.Filters>
      <S.Button>
        <p>See all</p>
        <button>-></button>
      </S.Button>
    </S.Section>
  );
};

export default ProductGridHeader;
