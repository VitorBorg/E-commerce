import styled from "styled-components";

export const Section = styled.section`
  height: auto;
  width: 60vw;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-content: center;
  justify-content: center;

  margin: 30px;

  h2 {
    color: #342d27;
    font-size: 34px;
    padding: 5px;
    text-align: center;

    ::before {
      height: 1px;
      width: 20px;
      color: black;
    }

    ::after {
    }
  }

  p {
    font-size: 15px;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: row;

  align-content: center;
  justify-content: space-around;

  h1 {
    color: #342d27;
    font-size: 64px;
    padding: 5px;
  }

  p {
    font-size: 15px;
  }
`;
