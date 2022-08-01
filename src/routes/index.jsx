import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Search from "../pages/Search/index";
import Product from "../pages/ProductProfile/index";
import Error from "../pages/Error/index";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/cart" element={<Private Item={Cart} C />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
