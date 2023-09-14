import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'> 
            {cartItems.length ? 
            (cartItems.map(item => <CartItem key = {item.id} cartItem={item}/>)) : (
                <span className='empty-message'>Your cart is empty</span>
              )}
               </div>
            <Button>Go to Checkout</Button>
        </div>
    )
}

export default CartDropdown