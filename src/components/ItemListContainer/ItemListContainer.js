import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Productos from '../../Json/Productos.json';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () =>{
 const [item, setItem] = useState([])
 const  {id}= useParams();

 useEffect(()=>{
    const promesa= new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(id ? Productos.filter(item=> item.category === id) : Productos)
        }, 1000)
    });
    promesa.then((data)=>{
        setItem(data)
    }, [id])

 }, [])

    return (
        <div>
        <ItemList item={item}/>
        </div>
    )
}

export default ItemListContainer