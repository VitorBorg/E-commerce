import React from "react";
import * as S from "./styles";

const MenuNavbar = () => {
  return (
    <S.Section>
      <a href="/">
        <div>
          <span>Ofertas do dia</span>
        </div>
      </a>

      <a href="/">
        <div>
          <span>Produtos em destaque</span>
        </div>
      </a>

      <a href="/">
        <div>
          <span>Ideias para presente</span>
        </div>
      </a>
    </S.Section>
  );
};

export default MenuNavbar;
