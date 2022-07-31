import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  * {
  }
`;

export const Filters = styled.div`
  align-content: center;
  justify-content: center;

  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Button = styled.div`
  align-content: center;
  justify-content: center;

  display: flex;
  flex-direction: row;
  gap: 20px;

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
`;
