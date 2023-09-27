import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FiltersProvider } from "./context/filters.jsx";
import "./index.css";
import { AuthProvider } from "./context/auth.jsx";
import { ProductsProvider } from "./context/products.jsx";




ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AuthProvider>

    <FiltersProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
    </FiltersProvider>
  </AuthProvider>
  </BrowserRouter>
);
