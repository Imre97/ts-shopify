import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

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
        <div style={{ border: '1px solid black', display: 'flex', padding: '1rem' }}>
            <div>
                <img style={{ width: '100px' }} src={cartItem.image} alt="" />
            </div>
            <div style={{marginLeft: '1rem'}}>
                <h3>{cartItem.title}</h3>
                <p>${totalPrice.toFixed(2)}</p>
                <div>{cartItem.amount} db</div>
                <button onClick={() => handleClick(cartItem.id)}>Remove</button>
                <button style={{marginLeft: '1rem'}} onClick={() => removeItemFormCar(cartItem.id)}>-</button>
                <button style={{marginLeft: '1rem'}} onClick={() => addItemToCart(cartItem.id)}>+</button>
            </div>
        </div>
    )
}

export default CartItems