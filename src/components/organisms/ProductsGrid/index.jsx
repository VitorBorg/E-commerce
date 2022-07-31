import React, { useEffect, useState } from "react";
import * as S from "./styles";

import ProductGridHeader from "../../molecules/ProductGridHeader/index";
import ProductGridCard from "../../molecules/ProductGridCard/index";

import GetProductsLimit from "../../../hooks/getProductsLimit";

const ProductsGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const fetchData = await GetProductsLimit(8);
        setData(fetchData);
      } catch (e) {
        console.log(e);
      }
    };

    dataFetch();
  }, []);

  return (
    <S.Section>
      <ProductGridHeader />
      <S.ContentProducts>
        <ul>
          {data.map((product) => (
            <li key={product.id}>
              <ProductGridCard
                Image={product.image}
                Title={product.title}
                Description={product.category}
                Price={product.price}
                Id={product.id}
              />
            </li>
          ))}
        </ul>
      </S.ContentProducts>
    </S.Section>
  );
};

export default ProductsGrid;
