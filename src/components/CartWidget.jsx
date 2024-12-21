import react from "react"; 
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { carrito } = useContext(CartContext);

    return (
        <Link to="/cart">
            <div className="cartWidget">
                <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="cart" className="cartIcon" />
                <span>{carrito.length}</span>
            </div>
        </Link>
    );
};  

export default CartWidget