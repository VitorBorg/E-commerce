import React from "react";
import * as S from "./styles";

import CartIcon from "../../atoms/CartIcon/CartIcon";

const InfoCard = ({ icon, title, description }) => {
  return (
    <S.Section>
      <S.ContentIcon>
        <div>{<CartIcon />}</div>
      </S.ContentIcon>
      <S.Content>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </S.Content>
    </S.Section>
  );
};

export default InfoCard;
