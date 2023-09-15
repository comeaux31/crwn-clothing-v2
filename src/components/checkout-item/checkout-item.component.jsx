import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as IncreaseIcon } from '../../assets/arrow-right-bold.svg';
import { ReactComponent as DecreaseIcon } from '../../assets/arrow-left-bold.svg';
import { ReactComponent as RemoveIcon } from '../../assets/x-bold.svg';


const CheckoutItem = ({checkoutItem}) => {
    const {name, imageUrl, price, quantity} = checkoutItem;
    const {addItemToCart, removeItemFromCart, deleteItemFromCart} = useContext(CartContext)

    const removeItemHandler = () => removeItemFromCart(checkoutItem)
    const addItemHandler = () => addItemToCart(checkoutItem)
    const deleteItemHandler = () => deleteItemFromCart(checkoutItem)

    return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`}/>
        </div>
        
        <span className='name'> {name} </span>
        <div className='quantity'>
            <DecreaseIcon className='arrow' onClick={removeItemHandler}/>
            <span className='value'>{quantity}</span>
            <IncreaseIcon className='arrow' onClick={addItemHandler}/>
        </div>
        <span className='price'>{quantity * price}</span>
        <RemoveIcon onClick={deleteItemHandler} className='remove'/>
    </div>)
}

export default CheckoutItem