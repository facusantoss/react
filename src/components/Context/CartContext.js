import React, { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity };
                } else {
                    return cartItem;
                }
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };
    
    const removeItem = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
    }

    const getQuantity = () => {
        return cart.reduce((acum, Item) => acum + Item.quantity, 0)
    }
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider