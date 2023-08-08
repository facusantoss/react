import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, cant) => {

        setCart([...cart, { ...item, cant }])

    }
    useEffect(() => {
        
    }, [cart])

    const getQuantity = () => {
        return cart.reduce((acum, Item) => acum + Item.stock, 0)
    }
    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider