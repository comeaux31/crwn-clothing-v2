import { createContext, useState } from "react";
import SHOP_DATA from '../shop-data.json';

export const ProductContext = createContext({
    currentProducts: []
});

export const ProductsProvider = ({ children }) => {
    const [currentProducts, setCurrentProducts] = useState(SHOP_DATA);
    const value = { currentProducts };

    // useEffect(() => {
    //     setCurrentProducts(SHOP_DATA.values);
    //     console.log(currentProducts);
    // }, []);

    return <ProductContext.Provider value={ value }>{children}</ProductContext.Provider>;
}