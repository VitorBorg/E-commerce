import styled from "styled-components";

export const Section = styled.section`
  height: auto;
  width: 80vw;
  margin-top: 100px;

  display: flex;
  flex-direction: column;

  div {
    align-content: center;
    justify-content: center;

    display: flex;
  }
`;
export const TitleSection = styled.div`
  height: auto;
`;

export const ContentProducts = styled.div`
  display: flex;
  flex-direction: row;
  height: 250px;

  margin: 30px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 50px;

    li {
      list-style-type: none;
      margin: 0;
      padding: 0;
      color: white;

      background: #504b3a;
      width: 12vw;
      min-width: 120px;

      align-content: center;
      justify-content: center;

      display: flex;
    }

    list-style-type: none;
  }
`;
