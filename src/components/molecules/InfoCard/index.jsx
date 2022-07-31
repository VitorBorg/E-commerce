import React from "react";
import * as S from "./styles";

import CartIcon from "../../atoms/CartIcon/CartIcon";
import TitleCategories from "../../atoms/TitleCategories";

const InfoCard = ({ icon, title, description }) => {
  return (
    <S.Section>
      <S.ContentIcon>
        <div>{<CartIcon />}</div>
      </S.ContentIcon>
      <S.Content>
        <TitleCategories>{title}</TitleCategories>
        <div>
          <p>{description}</p>
        </div>
      </S.Content>
    </S.Section>
  );
};

export default InfoCard;
