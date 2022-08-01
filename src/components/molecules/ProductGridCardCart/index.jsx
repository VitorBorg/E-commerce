import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

import ProductGridCard from "../ProductGridCard/index";

import useCart from "../../../hooks/useCart";

const ProductGridCardCart = ({ Image, Title, Description, Price, Id }) => {
  const { CartProductRemove } = useCart();

  const handleDeleteProduct = () => {
    const data = CartProductRemove(Id);
  };

  return (
    <S.Section>
      <ProductGridCard
        Image={Image}
        Title={Title}
        Description={Description}
        Price={Price}
        Id={Id}
      />
      <button onClick={handleDeleteProduct}>X</button>
    </S.Section>
  );
};

export default ProductGridCardCart;
