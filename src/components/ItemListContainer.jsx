import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore} from "firebase/firestore"
import Loader from './Loader';

const ItemListContainer = () => {
  const { category } = useParams();
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

  const categoryFilter = products.filter((product) =>product.category === category);
  console.log(categoryFilter);

  if(loading){
    return <Loader/>;
  }
  return (
    <>
      {category ? <ItemList products={categoryFilter} /> : <ItemList products={products} />}
    </>

  )
}

export default ItemListContainer