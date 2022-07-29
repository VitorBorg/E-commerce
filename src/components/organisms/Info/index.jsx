import React from "react";
import InfoCard from "../../molecules/InfoCard";
import * as S from "./styles";

const Info = () => {
  return (
    <S.Section>
      <S.Content>
        <h2>Lorem ipsum</h2>
      </S.Content>
      <S.ContentInfo>
        <InfoCard
          icon="icon"
          title="Best Quality"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />

        <InfoCard
          icon="icon"
          title="Best Quality"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />

        <InfoCard
          icon="icon"
          title="Best Quality"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
      </S.ContentInfo>
    </S.Section>
  );
};

export default Info;
