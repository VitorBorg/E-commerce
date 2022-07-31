import React from "react";
import Axios from "axios";

const GetProducts = () => {
  const url = "https://fakestoreapi.com/products";

  Axios.get(url).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export default GetProducts;
