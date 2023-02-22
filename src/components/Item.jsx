import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, stock, image}) => {
    return (
        <>
            <div key={id} className='item-container'>
                <img src={image} alt=""></img>
                <div>
                <h2>{name}</h2>
                <p>Stock: {stock}</p>
                <Link to={`/item/${id}`}><button>Detalle</button></Link>
                </div>
            </div>
        </>
    )
}

export default Item