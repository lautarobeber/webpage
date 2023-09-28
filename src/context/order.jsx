import { useState, createContext, useReducer, useEffect } from "react";
import { getOrdersRequest } from "../api/payment";

export const OrderContext = createContext();

export function OrderProvider({ children }) {
    //puedo actualizar el estado desde cualquier parte de la app

    const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrdersRequest()
    .then(response =>{
        console.log(response)
        setOrders(response.data)
    })
  },[])
  
  
    
  
    return (
      <OrderContext.Provider
        value={{
          orders,
          setOrders
        }}
      >
        {children}
      </OrderContext.Provider>
    );
  }