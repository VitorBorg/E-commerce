import React from "react";
import Axios from "axios";

const GetProductsCategorie = (category) => {
  const url = `https://fakestoreapi.com/products/category/${category}`;

  Axios.get(url)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.error(error));
};

export default GetProductsCategorie;
