import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const ProductGridCard = ({ Image, Title, Description, Price, Id }) => {
  return (
    <S.Section>
      <div>
        <img src={Image} />
      </div>
      <S.Content>
        <S.Description>
          <p>{Description}</p>
        </S.Description>
        <S.NamePrice>
          <h3>{Title}</h3>
          <p>R${Price}</p>
          <Link to={`/product/${Id}`}>Acessar página</Link>
        </S.NamePrice>
      </S.Content>
    </S.Section>
  );
};

export default ProductGridCard;
