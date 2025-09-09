import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { tw } from './utils'

interface Props {
  step?: number
  min?: number
  max?: number
}

export default function Counter({ min = 0, max = 10, step = 1 }: Props) {
  const [count, setCount] = useState<number>(9)

  return (
    <div className="flex space-x-6 items-center">
      <button
        type="button"
        aria-label="카운트 감소"
        disabled={count === min}
        onClick={() =>
          setCount((c) => {
            const nextCount = c - step
            if (nextCount < min) return min
            return nextCount
          })
        }
        className={tw(
          'cursor-pointer select-none',
          'grid place-content-center',
          'size-12 border-3 border-white',
          'text-4xl bg-transparent text-white',
          'disabled:cursor-not-allowed disabled:border-current disabled:text-gray-600'
        )}
      >
        <Minus />
      </button>
      <output className="text-9xl text-white">{count}</output>
      <button
        type="button"
        aria-label="카운트 증가"
        disabled={count === max}
        onClick={() =>
          setCount((c) => {
            const nextCount = c + step
            if (nextCount > max) return max
            return nextCount
          })
        }
        className={tw(
          'cursor-pointer select-none',
          'size-12 border-3 border-white',
          'text-4xl bg-transparent text-white',
          'disabled:cursor-not-allowed disabled:border-current disabled:text-gray-600'
        )}
      >
        <Plus />
      </button>
    </div>
  )
}
