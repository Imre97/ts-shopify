import { useState, useEffect } from 'react'
import { ShopItem } from '../modals/ProductModal'
import ProductItem from './ProductItem/ProductItem'

import classes from './Products.module.css'


const Products = () => {
    const [products, setProducts] = useState<ShopItem[]>([])
    const [loading, setLoading] = useState<boolean>(false)

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
        <div className={classes['products-container']}>
            {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
            {products.map(product => {
                return <ProductItem product={product} key={product.id} />
            })}
        </div>
    )
}

export default Products