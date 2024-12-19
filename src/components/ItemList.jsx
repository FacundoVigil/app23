import React from 'react'

const ItemList = ({productos}) => {
    
}

    return (
        <div>

            <h1>Nuestros productos</h1>

            {productos.lengh > 0 &&

                productos.map((producto) => {
                    return ( <Item key = {producto.id} producto={producto}/>
                    )
                })
            }
        </div>
    )

export default ItemList

