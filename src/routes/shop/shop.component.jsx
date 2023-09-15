import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment>
        {
            {
                (categoriesMap as Object).keys().map(title => {
                    <Fragment>
                        <h2>{title}</h2>
                        <div className="products-container">
                            {categoriesMap.map((product) => (
                                <ProductCard product={product} key={product.id}/>
                            ))}
                        </div>
                    </Fragment>
                })
            }
        }   
        </Fragment>
        
    )
};

export default Shop;