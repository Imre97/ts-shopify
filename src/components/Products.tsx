import { useState, useEffect } from 'react'
import { ShopItem } from '../modals/ProductModal'
import ProductItem from './ProductItem/ProductItem'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Products = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems)
    const [products, setProducts] = useState<ShopItem[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const item = cartItems.reduce((acc, amount) => acc + amount.amount, 0)

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        setLoading(true)

        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products', { signal })
                const data = await response.json()
                setProducts(data)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }

        
        fetchData()

        return () => {
            controller.abort()
        }
    }, [])

    return (
        <div>
            <div>
                <Link to='cart'>
                    cart
                </Link>
                <span style={{marginLeft: '1rem'}}>Number of items: {item}</span>
            </div>
            {loading && <p style={{textAlign: 'center'}}>Loading...</p>}
            <div style={{ display: 'flex', maxWidth: '1100px', flexFlow: 'row wrap', margin: '0 auto' }}>
                {products.map(product => {
                    return <ProductItem product={product} key={product.id} />
                })}
            </div>
        </div>
    )
}

export default Products