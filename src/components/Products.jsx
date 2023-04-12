import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'
import { useCallback } from 'react'

export function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductInCart = useCallback(product => {
    return cart.find(item => item.id === product.id)
  }, [cart])

  return (
    <main className='products'>
      <ul>
        {
          products.map(product => {
            const productInCart = checkProductInCart(product)
            return (
              <li key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div>
                  <div>
                    <strong>{product.title}</strong> - ${product.price}
                  </div>
                  <div>
                    <button
                      type='button'
                      onClick={() => addToCart(product)}
                    >
                      {productInCart?.quantity ?? 0}
                      <AddToCartIcon />
                    </button>
                    {
                      productInCart && <button onClick={() => removeFromCart(product.id)}><RemoveFromCartIcon /></button>
                    }
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
