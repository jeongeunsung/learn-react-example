import { type FormEvent, useId, useState } from 'react'
import { LearnSection } from './components'

export default function App() {
  return (
    <div className="flex flex-col gap-8 p-10 bg-gray-50 min-h-screen">
      <LearnSection
        className="flex flex-col gap-2"
        title="클릭 폼 (Click Form)"
        showTitle
      >
        <ClickForm />
      </LearnSection>

      <LearnSection
        className="flex flex-col gap-2"
        title="서브밋 폼 (Submit Form)"
        showTitle
      >
        <SubmitForm />
      </LearnSection>
    </div>
  )
}

function ClickForm() {
  const inputId = useId()
  const [value, setValue] = useState('')

  const handleClick = () => {
    alert(`입력값: ${value}`)
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow"
      aria-labelledby="click-form-title"
    >
      <label htmlFor={inputId} className="sr-only">
        입력값
      </label>
      <input
        id={inputId}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="입력하세요"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />
      <button
        type="button"
        onClick={handleClick}
        className="bg-emerald-500 text-white rounded px-4 py-2 hover:bg-emerald-600 transition"
        aria-label="클릭 폼 제출"
      >
        제출
      </button>
    </form>
  )
}

function SubmitForm() {
  const inputId = useId()
  const [value, setValue] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`입력값: ${value}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow"
      aria-labelledby="submit-form-title"
    >
      <label htmlFor={inputId} className="sr-only">
        입력값
      </label>
      <input
        id={inputId}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="입력하세요"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-sky-500 text-white rounded px-4 py-2 hover:bg-sky-600 transition"
        aria-label="서브밋 폼 제출"
      >
        제출
      </button>
    </form>
  )
}
