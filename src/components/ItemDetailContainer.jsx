import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { collection, getDocs, getFirestore} from "firebase/firestore"
import Loader from './Loader';

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const dataBase = getFirestore();
    const data = collection(dataBase, "productos");
    getDocs(data).then((data)=>{
        const newProducts = data.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
        }));
        setProducts(newProducts);
        setLoading (false);
      });
  }, []);

  if(loading){
    return <Loader/>;
  }
  return (
    <>
      <ItemDetail products={products}/>
    </>
  )
}

export default ItemDetailContainer