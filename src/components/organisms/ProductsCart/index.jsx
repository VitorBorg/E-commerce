import React, { useEffect, useState } from "react";
import * as S from "./styles";
import ProductGridCardCart from "../../molecules/ProductGridCardCart/index";

import GetProductsLimit from "../../../hooks/getProductsLimit";

import useCart from "../../../hooks/useCart";

const ProductsCart = () => {
  const { CartProducts, products } = useCart();
  const [data, setData] = useState(CartProducts());

  useEffect(() => {
    setData(CartProducts());
  }, [products]);

  return (
    <S.Section>
      <S.ContentProducts>
        {console.log(data?.length === 0)}
        {data?.length === 0 ? (
          <h2>Não há itens.</h2>
        ) : (
          <ul>
            {data.map((product) => (
              <li key={product.product.id}>
                <ProductGridCardCart
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
