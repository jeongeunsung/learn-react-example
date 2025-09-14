import { Container, Header, LearnSection } from '@/components'
import TodoListApp from '@/features/todo-list-app'

export default function App() {
  return (
    <>
      <title>할 일 목록 앱</title>
      <LearnSection title="할 일 목록 앱 + Supabase 인증 / 데이터베이스 연동">
        <Header />
        <Container className="pt-24">
          <TodoListApp />
        </Container>
      </LearnSection>
    </>
  )
}
