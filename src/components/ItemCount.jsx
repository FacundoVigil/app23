import React from "react";
import { useState } from "react";

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(1); 

    return (
        <div>
        <div>
            <button onClick={() => { if (cantidad > 1)  setCantidad(cantidad - 1)} }>-</button>
            <p>{cantidad}</p> 
            <button onClick={() => setCantidad(cantidad + 1)}> + </button>
        </div> 
        <button>Agregar al carrito</button>
        </div>

    ); 
};

export default ItemCount;