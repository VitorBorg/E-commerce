import React, { useEffect, useState } from "react";
import * as S from "./styles";

import GetCategories from "../../../hooks/getCategories";

const ProductsCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const fetchData = await GetCategories();
        setData(fetchData);
      } catch (e) {
        console.log(e);
      }
    };

    dataFetch();
  }, []);

  return (
    <S.Section>
      <S.TitleSection>
        <h2>Categories</h2>
      </S.TitleSection>
      <S.ContentProducts>
        <ul>
          {data.map((category) => (
            <li key={category}>
              <S.TitleSection>
                <p>{category}</p>
              </S.TitleSection>
            </li>
          ))}
        </ul>
      </S.ContentProducts>
    </S.Section>
  );
};

export default ProductsCategory;
