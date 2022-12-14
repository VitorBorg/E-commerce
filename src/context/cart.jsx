import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState();

  //verifica se o token é valido
  useEffect(() => {
    const cartItens = localStorage.getItem("cart_itens");

    setProducts(cartItens);
  }, []);

  const CartProductAdd = (product) => {
    const products = JSON.parse(localStorage.getItem("cart_itens"));

    let newProducts;

    if (products) {
      newProducts = [...products, { product }];
    } else {
      newProducts = [{ product }];
    }

    localStorage.setItem("cart_itens", JSON.stringify(newProducts));

    return;
  };

  const CartProductRemove = (Id) => {
    const products = JSON.parse(localStorage.getItem("cart_itens"));

    const hasProduct = products?.filter((item) => item.product.id !== Id);

    if (hasProduct) {
      localStorage.setItem("cart_itens", JSON.stringify(hasProduct));
      setProducts(hasProduct);
      return 1;
    } else {
      return 0;
    }
  };

  const CartProducts = () => {
    const productsStorage = JSON.parse(localStorage.getItem("cart_itens"));
    return productsStorage;
  };

  return (
    <CartContext.Provider
      value={{ products, CartProducts, CartProductAdd, CartProductRemove }}
    >
      {children}
    </CartContext.Provider>
  );
};
