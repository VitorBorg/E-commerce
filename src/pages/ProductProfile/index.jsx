import React from "react";
import * as S from "./styles";

import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return (
    <S.Container>
      <h1>Product</h1>
      <h1>Product {id}</h1>
    </S.Container>
  );
};

export default Product;
