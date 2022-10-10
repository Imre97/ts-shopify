import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

interface cartItem {
    id: number,
    price: number,
    title: string,
    image: string
}

interface Props {
    cartItem: cartItem
}

const CartItems: React.FC<Props> = (props) => {
    const { cartItem } = props
    const dispatch = useDispatch()

    const handleClick = (id: number) => {
        dispatch(cartActions.removeItemFromCart(id))
    }

    return (
        <div style={{ border: '1px solid black', display: 'flex', padding: '1rem' }}>
            <div>
                <img style={{ width: '100px' }} src={cartItem.image} alt="" />
            </div>
            <div>
                <h3>{cartItem.title}</h3>
                <p>{cartItem.price}</p>
                <button onClick={() => handleClick(cartItem.id)}>Remove</button>
            </div>
        </div>
    )
}

export default CartItems