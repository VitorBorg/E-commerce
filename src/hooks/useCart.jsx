import { useContext } from "react";
import { CartContext } from "../context/cart";

const useAuth = () => {
  const context = useContext(CartContext);

  return context;
};

export default useAuth;
