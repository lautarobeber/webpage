import { useContext } from "react"
import { ProductsContext } from "../context/products"

export const useProducts = () =>{
    const context  = useContext(ProductsContext)

    if (!context) {
        throw new Error ("UseProducts must be within product provider")
    }
    return context;
}