import React, { useEffect, useState } from "react";
import * as S from "./styles";
import ProductGridCard from "../../molecules/ProductGridCard/index";

import GetProductsLimit from "../../../hooks/getProductsLimit";

import useCart from "../../../hooks/useCart";

const ProductsCart = () => {
  const { CartProducts } = useCart();
  const data = CartProducts();

  return (
    <S.Section>
      <S.ContentProducts>
        {data[0]?.length ? (
          <h2>Não há itens.</h2>
        ) : (
          <ul>
            {data.map((product) => (
              <li key={product.product.id}>
                <ProductGridCard
                  Image={product.product.image}
                  Title={product.product.title}
                  Description={product.product.category}
                  Price={product.product.price}
                  Id={product.product.id}
                />
              </li>
            ))}
          </ul>
        )}
      </S.ContentProducts>
    </S.Section>
  );
};

export default ProductsCart;
