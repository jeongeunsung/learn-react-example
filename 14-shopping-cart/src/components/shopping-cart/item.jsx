import { useImmer } from 'use-immer'
import CartCounter from './counter'

export default function CartItem({ product }) {
  const [quantity, setQuantity] = useImmer(product.quantity)

  return (
    <li className="flex gap-2 justify-between py-2 px-0.5 text-[18px]">
      <p className="flex gap-1.5 items-center">
        <img
          className="size-8 rounded-full"
          src={`/products/${product.imageUrl}`}
          alt=""
        />
        <strong>{product.name}</strong> {product.price.toLocaleString()}원
      </p>
      <CartCounter
        quantity={quantity}
        setQuantity={setQuantity}
        inventory={product.inventory}
      />
    </li>
  )
}
