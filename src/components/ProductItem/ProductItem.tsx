import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cart-slice"

import { ShopItem } from "../../modals/ProductModal"
import ProductForm from "./ProductForm"

import classes from './ProductItem.module.css'

interface Props {
    product: ShopItem
}


const ProductItem: React.FC<Props> = (props) => {
    const { product } = props
    const dispatch = useDispatch()


    const addToCart = (amount: number) => {
        dispatch(cartActions.addItemToCart({ id: product.id, price: product.price, title: product.title, image: product.image, amount: amount }))
    }

    return (
        <div className={classes['product-box']}>
            <div>
                <img style={{ height: '100px', width: '100px', marginRight: '2rem', marginLeft: '2rem' }} src={product.image} alt={product.title} />
            </div>
            <div className={classes['product-content']}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className={classes['product-button']}>
                    <div>${product.price}</div>
                    <ProductForm addToCart={addToCart} />
                </div>
            </div>
        </div>
    )
}

export default ProductItem