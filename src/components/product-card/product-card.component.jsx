import './product-card.styles.jsx';
import Button, {buttonTypesClasses} from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { Footer, Name, Price, ProductCardButton, ProductCardContainer } from './product-card.styles.jsx';


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const {addItemToCart} = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);

    return (<ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <ProductCardButton onClick={addProductToCart}>Add to Cart</ProductCardButton>
    </ProductCardContainer> )

}

export default ProductCard;