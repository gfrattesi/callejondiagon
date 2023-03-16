import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {
    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity;
    }, 0);

    return (
        <div className="cart-icon">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="counter">{quantity}</span>
        </div>
    )
}

export default CartWidget