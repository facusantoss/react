import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () =>{
 const [item, setItem] = useState([])
 const  {id}= useParams();

 const getData = async (categoria) => {
   const querydb = getFirestore();
   const queryCollection= categoria ? query(collection(querydb, "products"), where("category", "==", categoria))
   : collection(querydb, "products");
   const resultado = await getDocs(queryCollection)
   const datos= resultado.docs.map(p=>({id: p.id, ...p.data()}))
   setItem(datos)
    }
    
    useEffect(()=>{
        getData(id)
    }, [id])

    return (
        <div>
        <ItemList item={item}/>
        </div>
    )
}

export default ItemListContainer