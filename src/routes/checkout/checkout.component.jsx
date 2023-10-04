import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.jsx';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles.jsx";



const Checkout = () => {

    const {cartItems, totalPrice} = useContext(CartContext)
    const headers = ['Product', 'Description', 'Quantity', 'Price', 'Remove']
    return (
    <CheckoutContainer> 
            <CheckoutHeader>
                {(
                    headers.map(element => 
                        <HeaderBlock key={headers.indexOf(element)}>
                            <span>{element}</span>
                        </HeaderBlock>
                    )
                )}
            </CheckoutHeader>
            {(cartItems.map(item => <CheckoutItem key = {item.id} checkoutItem={item}/>))}
            <Total> TOTAL: ${totalPrice}</Total>  
    </CheckoutContainer>

    );
}

export default Checkout;
