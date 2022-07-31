import React from "react";
import * as S from "./styles";

const CategoryGridCard = ({ Image, Title, Description, Price }) => {
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
        </S.NamePrice>
      </S.Content>
    </S.Section>
  );
};

export default CategoryGridCard;
