import React from 'react'
import  { Link } from 'react-router-dom'


const       Item = ({producto}) => {
    return (
        <div>    
            <img src={producto.image} alt={producto.tittle} />
            <h2>{producto.tittle}</h2>
            <p>{producto.description}</p>
            <link to="/item">Ver más</link>
        </div>
    )
} 

export default Item