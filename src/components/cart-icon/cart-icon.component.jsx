import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';



const CartIcon = () => {
    const {isCartOpen , setIsCartOpen, cartItems} = useContext(CartContext);

    const toggleDropdown = () => setIsCartOpen(!isCartOpen)

    return (
        <div className='cart-icon-container' onClick={toggleDropdown}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartItems.length}</span>
        </div>
    )

}

export default CartIcon;