import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
    return (
        <div>
            <h2>{titulo}</h2>
            <div className="productos">
                {productos.map((producto) => (
                    <Item key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
