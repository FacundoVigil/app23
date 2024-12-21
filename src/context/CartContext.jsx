import { createContext } from "react";


export const CartContext = createContext()

const carritoInicial = JSON .parse(localStorage.getItem("carrito")) || [] 

export default CartContext.Provider