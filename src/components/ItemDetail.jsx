import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { set } from "react-hook-form";




const ItemDetail = ({item}) => { 

    const {carrito, setCarrito} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleRestar = () => setCantidad(cantidad - 1) 
    
    const handleSumar = () => cantidad < item.stock ? setCantidad(cantidad + 1)
    : alert("No hay stock suficiente")
    
    const handleAgregar = () => { 
        alert(`Agregaste ${cantidad} productos al carrito`)

    setCarrito([...carrito, {...item, cantidad}])
    }
    
    return ( 
        <div className="itemDetail"> 
            <img src={item.image} alt={item.tittle} /> 
            <h2>{item.tittle}</h2> 
            <p>{item.description}</p> 
            <p>{item.stock}</p> 
            <p>{item.price}</p> 
            <ItemCount initial={1} stock={item.stock} onAdd={handleAgregar} /> 
        </div> 
    ) 
}



