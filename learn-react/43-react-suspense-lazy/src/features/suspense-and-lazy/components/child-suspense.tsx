import { useSuspenseQuery } from '@tanstack/react-query'
import { tw } from '@/utils'
import { getData } from '../api'

export default function ChildWithSuspense({ cutoff }: { cutoff: number }) {
  const { data } = useSuspenseQuery({
    queryKey: ['data', cutoff],
    queryFn: () => getData(cutoff),
    retry: false,
  })

  return (
    <ul className="list-none pl-0 flex flex-col gap-y-1">
      {data.map((item, i) => (
        <li
          key={i}
          className={tw(
            'size-8 grid place-content-center',
            'p-1 bg-emerald-600 text-white font-bold text-xs rounded'
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
