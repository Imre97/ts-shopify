import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface cartItem {
    id: number,
    price: number,
    title: string,
    image: string,
    amount: number
}

interface Initialstate {
    cartItems: cartItem[],
    totalAmount: number
}

const initialState: Initialstate = {
    cartItems: [],
    totalAmount: 0
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<cartItem>) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id)
            if(existingItem) {
                return
            }
            state.cartItems = [...state.cartItems, action.payload]
            state.totalAmount = state.totalAmount + action.payload.price
        },
        removeItemFromCart(state, action: PayloadAction<number>) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice
