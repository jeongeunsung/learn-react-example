import { LearnSection } from '@/components'
import Counter from './counter'

export default function App() {
  return (
    <LearnSection
      title="랜덤 카운트 업"
      className="p-10 bg-black flex justify-center items-center h-screen"
    >
      <Counter />
    </LearnSection>
  )
}
