import React from "react";
import * as S from "./styles";

import UserIcon from "../../atoms/UserIcon/UserIcon";
import CartIcon from "../../atoms/CartIcon/CartIcon";
import MenuIcon from "../../atoms/MenuIcon/MenuIcon";
import GearIcon from "../../atoms/GearIcon/GearIcon";

const UserNavbar = () => {
  return (
    <S.Section>
      <a href="/">
        <UserIcon />
      </a>
      <a href="/">
        <CartIcon />
      </a>
      <a href="/">
        <GearIcon />
      </a>
    </S.Section>
  );
};

export default UserNavbar;
