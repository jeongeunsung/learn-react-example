import { useState } from 'react'
import { Container, Header, LearnSection } from '@/components'
import TodoListApp from './guides/todo-list-app'

export default function App() {
  return (
    <LearnSection title="할 일 목록 앱 + Supabase 인증 / 데이터베이스 연동">
      <Header />
      <Container className="pt-24">
        <HeavyList />
      </Container>
    </LearnSection>
  )
}

function HeavyList() {
  const [name, setName] = useState('')

  // ❌ 렌더링 될 때마다 매번 새로운 배열이 생성됨
  const items = Array.from({ length: 1e4 }, (_, i) => ({
    id: i,
    text: `아이템 ${i}`,
  }))

  console.log('rendering')

  return (
    <div className="m-5 flex flex-col gap-1">
      <input
        type="search"
        name="search"
        aria-label="항목 검색"
        className="border w-full py-1.5 px-2.5"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ul className="overflow-auto h-50 border p-1">
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}
