import { useState, useId, useEffect, useRef, useContext } from "react";
import React from "react";
import { useFilter } from "./hooks/useFilter";
import Carousel from "./assets/components/carousel";
import NavBar from "./assets/components/navbar";
import Footer from "./assets/components/footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FiltersContext } from "./context/filters";

function ProductosMain() {
  const name = "Productos";
  const { filteredProducts} = useFilter();

  return (
    <div>
      <Titulo name={name} />
      <ListProducts productos={filteredProducts} />
      <Filters />
    </div>
  );
}

function Filters() {
  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const { setFilters, filters } = useFilter();
 

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
    setFilters({ ...filters, minPrice: minPrice });
  };

  const handleCategory = (event) => {
    setFilters({ ...filters, category: event.target.value });
  };

  return (
    <section className="absolute top-32 left-0">
      <div>
        <label htmlFor={minPriceFilterId}>
          <strong>Precio a partir de </strong>
        </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleMinPrice}
          value={minPrice}
        />
        <strong>${minPrice}</strong>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>
          <strong>Categoría </strong>
        </label>
        <select id={categoryFilterId} onChange={handleCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}

function ListProducts({ productos }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {productos.map((product) => (
          <a href="#" className="group" key={product.id}>
            <li
              className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
              key={product.id}
            >
              <img
                className="h-full w-full  group-hover:opacity-75"
                src={product.thumbnail}
                alt={product.title}
              />
            </li>
            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              ${product.price}
            </p>
          </a>
        ))}
      </ul>
    </div>
  );
}

function Titulo({ name }) {
  return (
    <div className=" flex flex-row place-content-between  border-b-2 border-black w-full h-16">
      <h1 className="flex justify-center items-center">{name}</h1>
      <p>Nombre Tienda</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Carousel />
              <Footer />
            </div>
          }
        />
        <Route path="/products" element={<ProductosMain />} />
      </Routes>
    </div>
  );
}

export default App;
