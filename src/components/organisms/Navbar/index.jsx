import React from "react";
import * as S from "./styles";

import LogoNavbar from "../../molecules/LogoNavbar/index";
import MenuNavbar from "../../molecules/MenuNavbar/index";
import UserNavbar from "../../molecules/UserNavbar/index";

import { Link, useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/index";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { signout } = useAuth();
  //const navigate = useNavigate();

  return (
    <S.NavbarStyle>
      <a href={`/home`}>
        <LogoNavbar />
      </a>

      <MenuNavbar />
      <button Text="Sair" onClick={() => [signout()]}>
        <UserNavbar />
      </button>
    </S.NavbarStyle>
  );
};

export default Navbar;
