import React from "react";
import ProductsCart from "../../components/organisms/ProductsCart";

import * as S from "./styles";

const Cart = () => {
  return (
    <S.Container>
      <div>
        <h1>Itens no seu carrinho:</h1>
      </div>
      <div>
        <ProductsCart />
      </div>
    </S.Container>
  );
};

export default Cart;
