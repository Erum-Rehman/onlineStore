import React, { createContext,useReducer } from "react";
import {Reducer} from './Reducer'

export const CartContext = createContext();

const CartContextProvider =(props) => {

    const [cart, dispatch] = useReducer(Reducer,{shoppingCart: [], totalPrice: 0, qty:0})
    return(

        <CartContext.Provider value={{...cart, dispatch}}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;

