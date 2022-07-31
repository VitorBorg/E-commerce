import styled from "styled-components";

export const NavbarStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100vw;

  padding: 25px 60px 50px 60px;
  margin: 0px 0px 0px 0px;

  display: flex;
  justify-content: space-between;
  background-color: #e1d6d0;
  z-index: 2;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;
