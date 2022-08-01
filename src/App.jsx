import GlobalStyle from "./styles/styles";
import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./context/auth";
import { CartProvider } from "./context/cart";
import Navbar from "./components/organisms/Navbar";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <RoutesApp />
        <GlobalStyle />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
