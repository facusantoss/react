import React from 'react'
import { BsFillCartDashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)
    return (
        <div>
          <Link to="/cart">
          <BsFillCartDashFill/> 
          <button>{getQuantity()}</button>
          </Link>
        </div>
    )
}

export default CartWidget;