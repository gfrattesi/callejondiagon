import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {
    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, cur) => {
        return acc + cur.quantity;
    }, 0);

    return (
        <div className="carrito">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="contador">{quantity}</span>
        </div>
    )
}

export default CartWidget