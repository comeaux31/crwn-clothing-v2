import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = { isCartOpen, setIsCartOpen };

    // useEffect(() => {
    //     setCurrentProducts(SHOP_DATA.values);
    //     console.log(currentProducts);
    // }, []);

    return <CartContext.Provider value={ value }>{children}</CartContext.Provider>;
}
