import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin: 10px 0px 10px 0px;

  justify-content: center;
  align-items: center;

  div:nth-child(1) {
    min-height: 50px;
    display: flex;

    justify-content: center;
    align-items: center;
    img {
      width: auto;
      max-width: 200px;
      max-height: 240px;
    }
  }
`;

export const Content = styled.div`
  align-content: center;
  justify-content: center;

  display: flex;
  flex-direction: column;
`;

export const NamePrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  p {
    position: absolute;
    top: -15px;
    left: 155px;
    transform: rotate(-15deg);

    background-color: rgba(100, 0, 0, 0.35);

    font-size: 14px;
    font-weight: 600;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  text-align: center;
  color: gray;

  p {
    font-size: 14px;
  }
`;
