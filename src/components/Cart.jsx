import { useContext, useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons.jsx'
import './Cart.css'
import { CartContext } from '../context/cart.jsx'

export function CartItem ({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - $ {price}
      </div>
      <footer>
        <small>Quantity: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useContext(CartContext)
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />
      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem key={product.id} addToCart={() => addToCart(product)} {...product} />
            ))
          }
        </ul>
        <button type='button' onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
