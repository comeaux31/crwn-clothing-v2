import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { CartIconContainer, ItemCount } from './cart-icon.styles';



const CartIcon = () => {
    const {isCartOpen , setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleDropdown = () => setIsCartOpen(!isCartOpen)

    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )

}

export default CartIcon;