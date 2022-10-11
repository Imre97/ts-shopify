import Products from "./components/Products";
import Cart from "./components/cart/Cart";
import { Routes, Route, Link } from 'react-router-dom'
import classes from './App.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { RootState } from './store'

function App() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems)
  const item = cartItems.reduce((acc, amount) => acc + amount.amount, 0)
  return (
    <div className="App">
      <div className={classes.header}>
        <Link to='/'>
          <h1>TS-Shopify</h1>
        </Link>
        <div className={classes.cart}>
          <Link to='cart'>
            <AiOutlineShoppingCart />
          </Link>
          <span className={classes.amount}>{item}</span>
        </div>
      </div>
      <Routes>
        <Route path='cart' element={<Cart />} />
        <Route path='/' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
