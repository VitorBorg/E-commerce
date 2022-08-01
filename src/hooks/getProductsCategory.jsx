import React from "react";
import Axios from "axios";

const GetProductsCategory = (category) => {
  const url = `https://fakestoreapi.com/products/category/${category}`;

    const res = await (await Axios.get(url)).data;
    return res;
};

export default GetProductsCategory;
