import { LearnSection } from '@/components'

export default function App() {
  return (
    <LearnSection title="사용자 정의 훅 (Custom Hooks)" showTitle>
      <CustomHookDemo />
    </LearnSection>
  )
}

function CustomHookDemo() {
  return <p>커스텀 훅을 작성합니다.</p>
}
