import React from "react";
import * as S from "./styles";

import useCart from "../../../hooks/useCart";

const ProductInfo = (props) => {
  const { CartProductAdd } = useCart();

  const handleAdd = () => {
    const res = CartProductAdd(props.data);
  };

  return (
    <S.Section>
      <S.Content>
        <S.Content>
          <h3>{props.data?.category}</h3>
          <h1>{props.data?.title}</h1>
          <h2>R$ {props.data?.price}</h2>
        </S.Content>
        <S.Content>
          <div>
            <p>{props.data?.description}</p>
          </div>

          <button onClick={handleAdd}>Adicionar ao carrinho</button>
        </S.Content>
      </S.Content>

      <S.Gallery>
        <div>
          <img src={props.data?.image} />
        </div>
      </S.Gallery>
    </S.Section>
  );
};

export default ProductInfo;
