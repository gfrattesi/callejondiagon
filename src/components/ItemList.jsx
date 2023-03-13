import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
    console.log(products)
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