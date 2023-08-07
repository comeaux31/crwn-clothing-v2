import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
    const {currentProducts} = useContext(ProductContext)
    return (
        <div>
            {currentProducts.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </div>
    )
};

export default Shop;