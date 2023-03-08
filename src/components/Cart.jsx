import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);


  return (
    <>
      <div>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
              <span>x{item.quantity}</span>
              <span>Precio:{item.price}</span>
              <span>Subtotal: {item.price*item.quantity}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart