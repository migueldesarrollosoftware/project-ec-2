import  { createContext, useState } from "react";

export const CartContext = createContext();

import PropTypes from 'prop-types';

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    
    const addToCart = product => {
        const productIndex = cart.findIndex(item => item.id === product.id);
    
        if (productIndex === -1) {
        setCart([...cart, { ...product,
            quantity: 1
        }]);
        } else {
        const newCart = [...cart];
        newCart[productIndex].quantity++;
        setCart(newCart);
        }
    };
    
    const removeFromCart = productId => {
        const newCart = cart.filter(item => item.id !== productId);
        setCart(newCart);
    };
    
    const clearCart = () => {
        setCart([]);
    };

    const toggleShowCart = () => {
        setShowCart(!showCart);
    }

    const getTotalItemsAdded = () => {
        return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    }

    const getTotalPrice = () => {
        return cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);
    }
    return (
        <CartContext.Provider value={{ cart,showCart, addToCart, removeFromCart, clearCart, toggleShowCart ,getTotalItemsAdded, getTotalPrice}}>
        {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};