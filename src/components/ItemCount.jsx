import React from 'react'
import { useContext, useState } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const ItemCount = ({stock, id, name, price}) => {
    const [cart, setCart] = useContext(CartContext);
    const [count, setCount] = useState(0);

    const addQuantity = () => {
        if (count < stock){
            setCount(count + 1
                )}
            ;
    }

    const substractQuantity = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        ;
    }


    const addToCart =() => {
        setCart ((currentItems) => {
            const isItemFound = currentItems.find((item)=> item.id === id);
            if (isItemFound){
                return currentItems.map((item)=>{
                    if (item.id === id){
                        return {...item, quantity: item.quantity + count};
                    } else{
                        return item;
                    }
                });
            } else {
                return [...currentItems, {id, quantity: count, name, price}];
            }
        });
    }


    return (
        <div className='item-count'>
            <button onClick={substractQuantity} className="btn-item-count">-</button>
            <p>{count}</p>
            <button onClick={addQuantity} className="btn-item-count">+</button>
            <button onClick={addToCart} className="btn-reset-count">Agregar: {count}</button>
        </div>
    )
}

export default ItemCount