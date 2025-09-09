import { Container, LearnSection, TodoListApp } from '@/components'

export default function App() {
  return (
    <LearnSection title="할 일 목록" className="p-5">
      <Container>
        <TodoListApp />
      </Container>
    </LearnSection>
  )
}
