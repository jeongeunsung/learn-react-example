import { FormEvent, useId, useRef, version } from 'react'
import { LearnSection } from '@/components'

export default function App() {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // 브라우저 기본 작동 방지
    e.preventDefault()

    // <form> 요소
    const form = e.currentTarget

    // 입력된 이메일 값 출력
    console.log(inputRef.current?.value)

    // 폼 초기화
    form.reset()
  }

  return (
    <LearnSection
      title="참조 객체 전달하기 (Forwarding Ref Object)"
      className="p-10"
    >
      <h2 className="text-3xl font-extrabold">
        리액트 {version} 버전으로 렌더링
      </h2>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <div role="group" className="flex gap-1 items-center">
          <label htmlFor={inputId} className="sr-only">
            이메일
          </label>
          <input
            ref={inputRef}
            type="email"
            name="email"
            id={inputId}
            className="p-2"
          />
        </div>
        <button type="submit" className="button">
          제출
        </button>
      </form>
    </LearnSection>
  )
}
