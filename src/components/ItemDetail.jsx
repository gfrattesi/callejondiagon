import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ products }) => {
  const { id } = useParams ()
  const productFilter = products.filter((product) => product.id == id)

  return (
    <>
      {productFilter.map((product) =>
        <div key={product.id} className="detail-container">
          <img src={product.pictureURL} alt=""></img>
          <div className='data-container'>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>${product.price}</p>
            <ItemCount stock={product.stock} id={product.id} name={product.name} price={product.price}/>
            <button className='btn-add'>Comprar</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ItemDetail