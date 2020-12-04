import React from "react";

import { AppProvider } from "context";
import Products from "Products";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Products />
    </AppProvider>
  );
}

export default App;
