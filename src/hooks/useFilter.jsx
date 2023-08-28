import { useContext, useState } from "react";
import { FiltersContext } from "../context/filters";
import { products as initialProducts } from '../mocks/products.json'

export function useFilter () {
    const [products] = useState(initialProducts);
  
    const {filters, setFilters} = useContext(FiltersContext)
  
  
  
  
    const filteredProducts = products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  
    return {filteredProducts, setFilters, filters}
  
  }