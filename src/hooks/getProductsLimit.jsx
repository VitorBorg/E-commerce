import React from "react";
import Axios from "axios";

const GetProductsLimit = async (limit) => {
  const url = `https://fakestoreapi.com/products?limit=${limit}`;

  const res = await (await Axios.get(url)).data;
  return res;
};

export default GetProductsLimit;
