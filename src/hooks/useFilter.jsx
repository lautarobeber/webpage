import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/filters";
import { products as initialProducts } from '../mocks/products.json'
import { ProductsProvider } from "../context/products";


export function useFilter () {
  
  const context = useContext(FiltersContext)
  
 /*  const {products} = useContext(ProductsProvider);

  
  
  
  const filterProducts = (products) => {
    return products.filter(product  => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  } */

  if (!context) {
    throw new Error ("UseFilters must be within product provider")
}


    return context
  
  }