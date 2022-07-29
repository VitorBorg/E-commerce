import styled from "styled-components";

export const Section = styled.section`
  max-width: 200px;

  display: flex;
  flex-direction: row;
  * {
  }
`;

export const Content = styled.div`
  align-content: center;
  justify-content: center;

  display: flex;
  flex-direction: column;

  div {
    h3 {
      padding: 0;
      margin: 0;
      color: #342d27;
      font-size: 16px;
    }
  }

  p {
    font-size: 14px;
  }
`;

export const ContentIcon = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2px 20px 0px 0px;
`;
