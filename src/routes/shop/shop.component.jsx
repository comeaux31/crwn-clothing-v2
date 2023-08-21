import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';

const Shop = () => {
    const {currentProducts} = useContext(ProductContext)
    return (
        <div className="products-container">
            {currentProducts.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </div>
    )
};

export default Shop;