import styled from "styled-components";

export const Section = styled.section`
  height: auto;
  width: 80vw;

  margin-top: 100px;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const ContentProducts = styled.div`
  display: flex;
  flex-direction: row;

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

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 50px;

    list-style-type: none;
  }
`;
