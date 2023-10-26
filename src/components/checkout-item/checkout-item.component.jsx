import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { QuantityContainer, RemoveIcon, SpannableLabel, IncreaseIcon, DecreaseIcon } from './checkout-item.styles';



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
        
        <SpannableLabel> {name} </SpannableLabel>
        <QuantityContainer>
            <DecreaseIcon className='arrow' onClick={removeItemHandler}/>
            <span className='value'>{quantity}</span>
            <IncreaseIcon className='arrow' onClick={addItemHandler}/>
        </QuantityContainer>
        <span className='price'>{quantity * price}</span>
        <RemoveIcon onClick={deleteItemHandler} className='remove'/>
    </div>)
}

export default CheckoutItem