import { CartImage, Name, CartItemContainer } from './cart-item.styles';

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
    <CartItemContainer>
        <CartImage src={imageUrl} alt={name}/>
        <div className='item-details'>
            <Name> {name} </Name>
            <span className='price'>{quantity} x ${price}</span>
        </div>
        
    </CartItemContainer>)
}

export default CartItem

