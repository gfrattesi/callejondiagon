import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { collection, getDocs, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const dataBase = getFirestore();
    const data = collection(dataBase, "productos");
    getDocs(data).then((data)=>{
        const newProducts = data.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
        }));
        setProducts(newProducts);
      });
  }, []);


  return (
    <>
      <ItemDetail products={products}/>
    </>
  )
}

export default ItemDetailContainer