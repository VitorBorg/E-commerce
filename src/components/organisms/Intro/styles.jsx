import styled from "styled-components";

export const Section = styled.section`
  height: 80vh;
  width: 100vw;

  background: linear-gradient(0turn, #e0d7ce, #e0d7d0, #e1d6d0);

  display: flex;
  justify-content: space-around;

  * {
    margin: 1px;
  }

  div:nth-child(1) {
    width: 30%;
    margin-left: 5vw;
  }
`;

export const Content = styled.div`
  align-content: center;
  justify-content: center;

  display: flex;
  flex-direction: column;

  h1 {
    color: #342d27;
    font-size: 64px;
    padding: 5px;
  }

  p {
    font-size: 15px;
  }
`;
