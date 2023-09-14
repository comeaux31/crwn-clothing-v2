import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if(existingItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if(existingItem && existingItem.quantity - 1 > 0) {
        return cartItems.map((cartItem) => cartItem.id === existingItem.id ? 
        {...cartItem, quantity: cartItem.quantity - 1} : cartItem);
    } else if(existingItem.quantity - 1 === 0) {
        return deleteCartItem(cartItems, existingItem)
    }
    return cartItems;
}

const deleteCartItem = (cartItems, productToDelete) => cartItems.filter((item) => item.id !== productToDelete.id);


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    totalPrice: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const addItemToCart = (productToAdd) => {
        if(Array.isArray(cartItems)) {
            setCartItems(addCartItem(cartItems, productToAdd))
        }
    }
    const removeItemFromCart = (productToRemove) => {
        if(Array.isArray(cartItems)) {
            setCartItems(removeCartItem(cartItems, productToRemove))
        }
    }
    const deleteItemFromCart = (productToDelete) => {
        if(Array.isArray(cartItems)) {
            setCartItems(deleteCartItem(cartItems, productToDelete))
        }
    }


useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
    
}, [cartItems])

useEffect(() => {
    const newPrice = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
    setTotalPrice(newPrice)
}, [cartItems])

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, deleteItemFromCart, totalPrice };

    return <CartContext.Provider value={ value }>{children}</CartContext.Provider>;
}
