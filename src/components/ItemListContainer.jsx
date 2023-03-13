import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore} from "firebase/firestore"

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const dataBase = getFirestore();
    const itemCollection = collection (dataBase, "productos");
    getDocs(itemCollection).then((querySnapshot)=>{
        const documents = querySnapshot.docs.map((doc)=>({
          ...doc.data(), id: doc.id
        }));
        setProducts(documents);
      });
  }, []);

  const categoryFilter = products.filter((product) =>product.category === category);
  console.log(categoryFilter);

  return (
    <>
      {category ? <ItemList products={categoryFilter} /> : <ItemList products={products} />}
    </>

  )
}

export default ItemListContainer