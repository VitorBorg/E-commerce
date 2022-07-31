import React from "react";
import Axios from "axios";

const GetCategories = async () => {
  const url = `https://fakestoreapi.com/products/categories`;

  const res = await (await Axios.get(url)).data;
  return res;
};

export default GetCategories;
