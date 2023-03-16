import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, stock, price, image}) => {
    return (
        <>
            <div key={id} className='item-container'>
                <img src={image} alt=""></img>
                <div>
                <h2>{name}</h2>
                <p>${price}</p>
                <p>Stock: {stock}</p>
                <Link to={`/item/${id}`}><button>Ver mas</button></Link>
                </div>
            </div>
        </>
    )
}

export default Item