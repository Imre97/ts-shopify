import { useSelector } from 'react-redux'
import { RootState } from "../../store"

import CartItems from './CartItems'
import classes from './Cart.module.css'


const Cart = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems)
    const cartItemsAmount = useSelector((state: RootState) => state.cart.totalAmount)
    return (
        <div className={classes['cart-container']}>
            <h1>Total amount: ${cartItemsAmount.toFixed(2)}</h1>
            <div style={{marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1100px', margin: '0 auto' }}>
                {cartItems.map(x => {
                    return <CartItems key={x.id} cartItem={x} />
                })}
            </div>
        </div>
    )
}

export default Cart