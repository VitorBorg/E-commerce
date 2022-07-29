import styled from "styled-components";

export const Section = styled.section`
  width: auto;

  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #342d27;

    transition: font-size;
    transition-duration: 0.1s;
  }

  a:hover {
    font-size: 17px;
    transition: font-size;
    transition-duration: 0.1s;
  }
`;
