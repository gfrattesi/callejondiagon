import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { category } = useParams();
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

  const categoryFilter = products.filter((product) =>product.category === category);
  console.log(categoryFilter);

  return (
    <>
      {category ? <ItemList products={categoryFilter} /> : <ItemList products={products} />}
    </>

  )
}

export default ItemListContainer