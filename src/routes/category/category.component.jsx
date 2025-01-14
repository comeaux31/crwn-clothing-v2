import './category.styles.jsx';
import { useParams } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { CategorySectionContainer, CategoryTitle } from './category.styles.jsx';

const Category = () => {
    const {category} = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category])
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategorySectionContainer>
            
            {products && 
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))    
            }
        </CategorySectionContainer>
        </Fragment>
        
    )
}

export default Category