import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { collection, getDocs, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
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

  return (
    <>
      <ItemDetail products={products}/>
    </>
  )
}

export default ItemDetailContainer