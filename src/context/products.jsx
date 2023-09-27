import { createContext, useEffect, useState } from "react";
import { getProductsRequest, createProductRequest, deleteProductRequest } from "../api/product";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    console.log('rendered')
    getProductsRequest()
      .then(response => {
        
       setProducts(response.data)
      })
  }, [])
 
  const deleteProduct = async (id) =>{
    try{
      const res = await deleteProductRequest(id);
      console.log(res)
      getProductsRequest().then(response => {
        setProducts([...response.data])
      })
    
  } catch (e) {
    console.log(e)
  }
  }
  const addProduct = async (product) => {
    try {
      const res = await createProductRequest(product);
      console.log(res);
      getProductsRequest().then(response => {
        setProducts([...response.data])
      })
    } catch (e) {
      console.log(error);
    }
  };

  

  return (
    <ProductsContext.Provider value={{ products, addProduct, deleteProduct}}>
      {children}
    </ProductsContext.Provider>
  );
}
