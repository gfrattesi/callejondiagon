import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(0);

    const addItem = () => {
        setCount(count + 1);
    }

    const substractItem = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        ;
    }
    const reset = () => {
        setCount(0);
    }


    return (
        <div className='item-count'>
            <button onClick={substractItem} className="btn-item-count">-</button>
            <p>{count}</p>
            <button onClick={addItem} className="btn-item-count">+</button>
            <button onClick={reset} className="btn-reset-count">Reset</button>
        </div>
    )
}

export default ItemCount