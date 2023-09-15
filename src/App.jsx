
import React from "react";
import { useCart } from "./hooks/useCart";
import Carousel from "./assets/components/carousel";
import NavBar from "./assets/components/navbar";
import Titulo from "./assets/components/titlelistproducts";
import ListProducts from "./assets/components/listproducts";
import { FiltersControllers } from "./assets/components/filterscontrollers";
import Footer from "./assets/components/footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./context/cart";
import { CartProduct } from "./assets/components/cartProducts.jsx";
import Register from "./assets/components/register";
import Login from "./assets/components/login.jsx";
import { AuthProvider } from "./context/auth";
import { ProtectedRoute } from "./ProtectedRoute";
import  AddProduct  from "./assets/components/addproduct.jsx";


function Cart() {
  const { cart, clearCart, removeFromCart } = useCart();


  return (
    <div className="relative  h-screen w-full">
      <div className="flex flex-column mx-10 my-10   h-auto-2/3  ">
        <div className="flex-initial w-2/3 my-2 h-auto mx-6 overflow-auto">
          <div className="">
            <h1 className="border-b-2 py-2 text-medium font-bold mx-6">
              PRODUCTOS
            </h1>
          </div>
          <ul role="list" className="mx-6 divide-y divide-gray-200">
            {cart.map((product) => (
              <CartProduct key={product._id} product={product} />
            ))}
          </ul>
        </div>
        <div className="relative  bg-white w-1/3 border-t border-gray-200 px-4 py-2 sm:px-6">
          <div className="absolute top-10 mx-10">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Envio gratis en todos los productos dentro de Argentina.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Comprar
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                o <a href="#">Continuar Comprando</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




function App() {
  return (
   

   
    <CartProvider>
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
        <Route
          path="/products"
          element={
            <div>
              <Titulo />
              <ListProducts />
              <FiltersControllers />
              <Footer />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div>
              <Register />
              
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <Login />
              
            </div>
          }
        />
        <Route element={<ProtectedRoute/>}>
        
          <Route
            path="/cart"
            element={
              <div>
                <Cart />
                <Footer />
              </div>
            }
          />
           <Route
            path="/addproduct"
            element={
              <div>
                <AddProduct />
                <Footer />
              </div>
            }
          />


       </Route>
      </Routes>
    </CartProvider>
    
  );
}

export default App;
