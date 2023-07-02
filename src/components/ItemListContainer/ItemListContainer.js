import React from 'react'

const ItemListContainer = ({greeting, img}) =>{
    return (
        <div>
        <h3>{greeting}</h3>
        <img src= {img} width="700px" height= "300px" alt="nombre"/>
        </div>
    )
}

export default ItemListContainer