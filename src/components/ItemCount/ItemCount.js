import React from "react";
import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } 
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
        
    }

    return(
        <div className="container" id="itemcount">
        <div className="row mb-3">
            <div className="col-md-2">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-dark counter-btn" onClick={decrementarStock}>-</button>
                    <span className="counter-value">{counter}</span>
                    <button type="button" className="btn btn-outline-dark counter-btn" onClick={incrementarStock}>+</button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2">
                <button type="button" className="btn btn-dark add-to-cart-btn" onClick={() => onAdd(counter)}>Agregar al carrito</button>
            </div>
        </div>
    </div>
    )
}

export default ItemCount;