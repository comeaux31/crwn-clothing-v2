import './cart-dropdown.styles.jsx';
import Button, {buttonTypesClasses} from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const {cartItems, setIsCartOpen} = useContext(CartContext)
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        setIsCartOpen(false)
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems> 
            {cartItems.length ? 
            (cartItems.map(item => <CartItem key = {item.id} cartItem={item}/>)) : (
                <EmptyMessage>Your cart is empty</EmptyMessage>
              )}
               </CartItems>
                    <Button buttonType={buttonTypesClasses.base} onClick={goToCheckoutHandler}>Go to Checkout</Button>
               
            
        </CartDropdownContainer>
    )
}

export default CartDropdown