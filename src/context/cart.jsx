import { useState, createContext, useReducer } from "react";

export const CartContext = createContext();
//state
const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

//actualizar local storage 
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}
//reducer
const reducer = (state, action)  => {
  //funcion y parametro producto
  const {type: actionType, payload: actionPayload} = action
  switch(actionType) {
    
    case 'ADD_TO_CART': {
      const {id} = actionPayload
      const productInCartIndex = state.findIndex(item => item.id == id)
    
      if (productInCartIndex >= 0){
        const newCart = structuredClone(state)
        newCart[productInCartIndex].quantity += 1
        //actualizar localstorage
        updateLocalStorage(newCart)
        //devuelve un state
       return newCart;
        
    }

    const newState = [
      ...state,
      {
        ...actionPayload,
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
    
    }

    case 'REMOVE_FROM_CART': {
      const {id} = actionPayload
      const newState = state.filter(item => item.id !== id)
       updateLocalStorage(newState)
      return newState
      
    }

    case 'CLEAR_CART': {
      updateLocalStorage([])
      return [];
    }

  }


  return state
}

export function CartProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = product => dispatch({
    //se pasa al reducer al parametro ation
    type:'ADD_TO_CART',
    payload: product
  })

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })



  return (
    <CartContext.Provider value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart
      }}>
          {children}
      </CartContext.Provider>
  )
}
