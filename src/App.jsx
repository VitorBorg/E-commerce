import GlobalStyle from "./styles/styles";
import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./context/auth";

import Navbar from "./components/organisms/Navbar";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
