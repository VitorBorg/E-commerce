import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Titillium Web', sans-serif;
  }

  body {
    max-width: 100vw;
    height: 100vh;
    background-color: #fffff;
  }
`;

export default GlobalStyle;
