import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cart-slice"

import { ShopItem } from "../../modals/ProductModal"
import ProductForm from "./ProductForm"

interface Props {
    product: ShopItem
}


const ProductItem: React.FC<Props> = (props) => {
    const { product } = props
    const dispatch = useDispatch()


    const addToCart = (amount: number) => {
        dispatch(cartActions.addItemToCart({id: product.id, price: product.price, title: product.title, image: product.image, amount: amount}))
    }

    return (
        <div style={{ border: '1px solid black', margin: '1rem', display: 'flex', alignItems: 'center', maxWidth: '500px', }}>
            <div>
                <img style={{ height: '100px', width: '100px', marginRight: '2rem', marginLeft: '2rem' }} src={product.image} alt={product.title} />
            </div>
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div>${product.price}</div>
                <ProductForm addToCart={addToCart} />
            </div>
        </div>
    )
}

export default ProductItem