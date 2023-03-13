import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from 'react';

const ItemDetail = ({ products }) => {
  const { id } = useParams ();
  const [product, setProduct]= useState([]);

  useEffect(()=>{
    const dataBase = getFirestore();
    const currItem = doc(dataBase, "productos", `${id}`);
    getDoc(currItem).then((snapshot)=>{
      if (snapshot.exists()) {
        setProduct(snapshot.data());
      } else {
        console.log("El documento no existe");
      }
    });
  }, []);

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
            <ItemCount stock={product.stock} id={product.id} name={product.name} price={product.price} image={product.pictureURL}/>
          </div>
        </div>
      )}
    </>
  )
}

export default ItemDetail