import CartCounter from './counter'

export default function CartItem() {
  return (
    <li className="flex gap-2 justify-between py-2 px-0.5 text-[18px]">
      상품 항목
      <CartCounter />
    </li>
  )
}
