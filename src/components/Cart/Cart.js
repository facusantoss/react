import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const { cart } = useContext(CartContext)
    
    return (

        <>
            <h1>Carrito</h1>
            <hr />
            {
                cart.length === 0 ? <h1>Carrito Vacio</h1>
                    : <div>
                        {cart.map(Item => <div key={Item.id}>
                            <h3>Nombre: {Item.name}</h3>
                            <img src={Item.img} alt='imagen' />
                            <p>cantidad: {Item.stock}</p>
                            <p>precio: {Item.price}</p>
                            <hr /><br />
                        </div>)}
                    </div>
            }


            <Link to='/checkout'>
                <button>Finalizar Compra</button>
            </Link>

        </>
    )
}