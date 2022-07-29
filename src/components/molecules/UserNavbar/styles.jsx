import styled from "styled-components";

export const Section = styled.section`
  width: auto;

  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #342d27;

    transition: transform;
    transition-duration: 0.1s;
  }

  a:hover {
    transform: scale(1.2, 1.2);
    transition: transform;
    transition-duration: 0.1s;
  }
`;
