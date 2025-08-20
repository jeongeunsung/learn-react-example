export default function CartCounter() {
  return (
    <div role="group" className="flex gap-1 text-xl">
      <button type="button">-</button>
      <output>0</output>
      <button type="button">+</button>
    </div>
  )
}
