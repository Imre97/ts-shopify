import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

import classes from './CartItem.module.css'

interface cartItem {
    id: number,
    price: number,
    title: string,
    image: string,
    amount: number
}

interface Props {
    cartItem: cartItem
}

const CartItems: React.FC<Props> = (props) => {
    const { cartItem } = props
    const dispatch = useDispatch()
    const totalPrice = cartItem.price * cartItem.amount

    const handleClick = (id: number) => {
        dispatch(cartActions.removeItemFromCart(id))
    }

    const removeItemFormCar = (id: number) => {
        dispatch(cartActions.removeOneItemFromCart(id))
    }

    const addItemToCart = (id: number) => {
        dispatch(cartActions.addOneItemToCart(id))
    }

    return (
        <div className={classes['cart-item']}>
            <div>
                <img style={{ width: '100px' }} src={cartItem.image} alt="" />
            </div>
            <div style={{ marginLeft: '1rem' }}>
                <h3>{cartItem.title}</h3>
                <div className={classes['cart-item__amount']}>
                    <p>${totalPrice.toFixed(2)}</p>
                    <button onClick={() => removeItemFormCar(cartItem.id)}>-</button>
                    <div>{cartItem.amount} db</div>
                    <button onClick={() => addItemToCart(cartItem.id)}>+</button>
                </div>
                <button className={classes['cart-item__remove']} onClick={() => handleClick(cartItem.id)}>Remove</button>
            </div>
        </div>
    )
}

export default CartItems