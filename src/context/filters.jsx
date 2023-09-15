import { createContext,useEffect,useState } from "react";
import { getProducts } from "../api/auth";

//consumir contexto
export const FiltersContext = createContext();

//da acceso al contexto desde la app

export function FiltersProvider ({ children }) {
  //puedo actualizar el estado desde cualquier parte de la app
    const [products, setProducts] = useState([])

   const getProductsList = async () => {
    const products = await getProducts();
    console.log(products.data)
    setProducts(products.data);

   }
useEffect(()=>{
  getProductsList()
},[])

    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0,
      });
    return (
        <FiltersContext.Provider value={{
          filters,
          setFilters,
          products,
          setProducts
        }}>
            {children}
        </FiltersContext.Provider>
    )
}