import React from "react";
import Axios from "axios";

const GetProduct = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;

  const res = await (await Axios.get(url)).data;
  return res;
};

export default GetProduct;
