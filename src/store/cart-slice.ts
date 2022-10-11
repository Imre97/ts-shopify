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
            state.totalAmount = state.totalAmount + action.payload.price * action.payload.amount
        },
        removeItemFromCart(state, action: PayloadAction<number>) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        },
        removeOneItemFromCart(state, action: PayloadAction<number>) {

            const existingCartItemIndex = state.cartItems.findIndex(item => item.id === action.payload)
        
            const existingItem = state.cartItems[existingCartItemIndex]
    
            const updatedTotalAmount = state.totalAmount - existingItem.price
    
            let updatedItems
            if(existingItem.amount === 1){
                updatedItems = state.cartItems.filter(item => item.id !== action.payload)
            } else {
                const updatedItem = {...existingItem, amount: existingItem.amount -1}
                updatedItems = [...state.cartItems]
                updatedItems[existingCartItemIndex] = updatedItem
            }

            state.cartItems = updatedItems
            state.totalAmount = updatedTotalAmount

        },
        addOneItemToCart(state, action: PayloadAction<number>) {
            const itemIndex = state.cartItems.findIndex(x => x.id === action.payload)
            const item = state.cartItems[itemIndex]

            const updatedItem = {...item, amount: item.amount + 1}

            const totalAmount = state.totalAmount + item.price
            
            let updatedItemsArray = [...state.cartItems]
            updatedItemsArray[itemIndex] = updatedItem


            state.cartItems = updatedItemsArray
            state.totalAmount = totalAmount
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice
