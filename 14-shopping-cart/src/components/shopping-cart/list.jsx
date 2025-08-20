import products from '@/data/cart.json'
import CartItem from './item'

export default function CartList() {
  return (
    <ul>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  )
}
