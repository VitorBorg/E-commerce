import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 80vw;
  * {
  }
`;

export const Content = styled.div`
  align-content: center;
  justify-content: center;

  padding-right: 2vw;

  display: flex;
  flex-direction: column;
  gap: 20px;

  div:nth-child(2) {
    margin-top: 20vh;
  }
`;

export const Gallery = styled.div`
  align-content: center;
  justify-content: center;

  min-width: 50vw;

  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    align-content: center;
    justify-content: center;

    min-width: 50vw;

    display: flex;
  }

  img {
    width: 30vw;
    height: auto;
  }
`;
