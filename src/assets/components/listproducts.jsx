import { useFilter } from "../../hooks/useFilter";
import { useCart } from "../../hooks/useCart";
import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductsRequest } from "../../api/product";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

function ListProducts() {
  const { filters, filterProducts } = useFilter();
  const { products, getProducts, deleteProduct } = useProducts();
  const { addToCart, clearCart } = useCart();
  const { productos, setProductos } = useState([]);

  /* useEffect(() => {
    console.log('rendered')
    getProducts()
      .then(response => {
        console.log(response)
       setProductos(response.data)
      })
  }, []) */

 
 
 

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product._id} className="">
            <Link key={product._id} to={`/products/${product._id}`}>
              <li
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
                key={product._id}
              >
                <img
                  className="h-full w-full  group-hover:opacity-75"
                  src={product.src}
                  alt={product.name}
                />
              </li>
            </Link>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              ${product.price}
            </p>
            <div className="flex ">
              <button type="submit" onClick={() => addToCart(product)}>
                Agregar al Carrito
              </button>
              <button
                className="ml-12 text-red-500"
                type="submit"
                onClick={() => deleteProduct(product._id)}
              >
                Eliminar
              </button>
              <Link to={`/products/${product._id}`} >
                Comprar
              </Link>
            </div>
            
           
           
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ListProducts;
