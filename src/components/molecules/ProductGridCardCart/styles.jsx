import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin: 10px 0px 10px 0px;

  position: relative;

  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    top: -15px;
    left: 155px;

    cursor: pointer;

    font-size: 14px;
    font-weight: 600;
  }
`;
