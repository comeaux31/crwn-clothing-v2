import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss';



const Checkout = () => {

    const {cartItems, totalPrice} = useContext(CartContext)
    const headers = ['Product', 'Description', 'Quantity', 'Price', 'Remove']
    return (
    <div className='checkout-container'> 
            <div className="checkout-header">
                {(
                    headers.map(element => 
                        <div key={element} className="header-block">
                            <span>{element}</span>
                        </div>
                    )
                )}
            </div>
            {(cartItems.map(item => <CheckoutItem key = {item.id} checkoutItem={item}/>))}
            <span className="total"> TOTAL: ${totalPrice}</span>  
    </div>

    );
}

export default Checkout;
