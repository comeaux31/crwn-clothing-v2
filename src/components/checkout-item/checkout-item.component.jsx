import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as IncreaseIcon } from '../../assets/arrow-right-bold.svg';
import { ReactComponent as DecreaseIcon } from '../../assets/arrow-left-bold.svg';
import { ReactComponent as RemoveIcon } from '../../assets/x-bold.svg';


const CheckoutItem = ({checkoutItem}) => {
    const {name, imageUrl, price, quantity} = checkoutItem;
    const {addItemToCart, removeItemFromCart, deleteItemFromCart} = useContext(CartContext)
    return (
    <div className='checkout-item-container'>
        <img src={imageUrl} alt={name}/>
        <span className='name'> {name} </span>
        <div className='checkout-item-quantity'>
            <DecreaseIcon onClick={() => removeItemFromCart(checkoutItem)}/>
            <span>{quantity}</span>
            <IncreaseIcon onClick={() => addItemToCart(checkoutItem)}/>
        </div>
        <span className='price'>{quantity * price}</span>
        <RemoveIcon onClick={() => deleteItemFromCart(checkoutItem)}/>
    </div>)
}

export default CheckoutItem