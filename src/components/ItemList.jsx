import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
    
    return (
        <div className='item-list-container'>        
            <div className='item-list'>
            {products.map((product) => {
                return (
                    <Item
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        stock={product.stock}
                        price={product.price}
                        image={product.pictureURL}
                        category={product.category}
                    />
                )
            })}
        </div>
    </div>
    )
}

export default ItemList