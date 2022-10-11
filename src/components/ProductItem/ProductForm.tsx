import { FormEvent, useRef } from 'react'

interface Props {
    addToCart: (amount: number) => void
}

const ProductForm: React.FC<Props> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const enteredInputRef = inputRef.current!.value

        props.addToCart(+enteredInputRef)

        inputRef.current!.value = ''

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" min={1} step='1' ref={inputRef} />
            <button type="submit">add to cart</button>
        </form>
    )
}

export default ProductForm