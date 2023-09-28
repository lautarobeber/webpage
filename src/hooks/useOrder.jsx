import { useContext } from "react";
import { OrderContext } from "../context/order";

export const useOrder = () =>{
    const context = useContext(OrderContext);
    
    if (context === undefined){
        throw new Error('Use cart must be used within a provider')
    }

    return context
}