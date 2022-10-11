import { useState, useRef } from 'react'

import classes from './ProductForm.module.css'

interface Props {
    addToCart: (amount: number) => void
}

const ProductForm: React.FC<Props> = (props) => {
    const [formIsValid, setFormIsValid] = useState<boolean>(true)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const enteredInputRef = inputRef.current!.value

        if(+enteredInputRef < 1) {
            setFormIsValid(false)
            return
        }

        setFormIsValid(true)

        props.addToCart(+enteredInputRef)

        inputRef.current!.value = ''

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" min={1} step='1' ref={inputRef} className={classes['form-input']}/>
            <button type="submit">add</button>
            {!formIsValid && <p style={{color: 'red', fontWeight: 'bold'}}>Please enter a valid amount</p>}
        </form>
    )
}

export default ProductForm