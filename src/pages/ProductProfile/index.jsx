import React, { useEffect, useState } from "react";
import * as S from "./styles";

import { useParams } from "react-router-dom";
import GetProduct from "../../hooks/getProduct";

import ProductInfo from "../../components/organisms/ProductInfo/index";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const fetchData = await GetProduct(id);
        setData(fetchData);
      } catch (e) {
        console.log(e);
      }
    };

    dataFetch();
  }, []);

  return (
    <S.Container>
      <ProductInfo data={data} />
    </S.Container>
  );
};

export default Product;
