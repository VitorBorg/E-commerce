import React from "react";
import Axios from "axios";

const GetProduct = (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;

  Axios.get(url)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.error(error));
};

export default GetProduct;
