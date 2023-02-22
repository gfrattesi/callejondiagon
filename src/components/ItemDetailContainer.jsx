import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/src/data.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])


  return (
    <>
      <ItemDetail products={products}/>
    </>
  )
}

export default ItemDetailContainer