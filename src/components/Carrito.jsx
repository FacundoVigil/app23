import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {

    const {carrito} = useContext(CartContext)

    return (
        <div>    
            <h1>Carrito</h1>

            {carrito.map(producto => (
            <div key={producto.id}>
                <p>{producto.tittle}</p>
                <p>{producto.cantidad}</p>
            </div>
            ))}
        
        
        </div>
    )
}