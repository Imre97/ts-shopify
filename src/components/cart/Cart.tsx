import { useSelector } from 'react-redux'
import { RootState } from "../../store"
import { Link } from 'react-router-dom'

import CartItems from './CartItems'

const Cart = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems)
    return (
        <div>
            <div>
                <Link to='/'>Főoldal</Link>
            </div>
            <div style={{marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1100px', margin: '0 auto' }}>
                {cartItems.map(x => {
                    return <CartItems key={x.id} cartItem={x} />
                })}
            </div>
        </div>
    )
}

export default Cart