import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss';



const Checkout = () => {

    const {cartItems, totalPrice} = useContext(CartContext)

    return (
    <div className='checkout-items'> 
            <div className="checkout-label-container">
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            {cartItems.length ? 
            (cartItems.map(item => <CheckoutItem key = {item.id} checkoutItem={item}/>)) : (
                <span className='empty-message'>Your cart is empty</span>
              )}
            <span className="total-price"> TOTAL: ${totalPrice}</span>  
    </div>

    );
}

export default Checkout;