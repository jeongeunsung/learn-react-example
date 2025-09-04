import { type FormEvent, useId, useState } from 'react'
import { LearnSection } from './components'
import { useToggleState } from './hooks'

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

  const [checked, { toggle }] = useToggleState(false)

  const [comment, setComment] = useState('200자 내외로 댓글을 작성하세요.')
  const [gender, setGender] = useState('남성')

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
      <textarea
        aria-label="댓글 내용"
        className="p-2 border-1 border-blue-400"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="flex flex-col gap-1">
        <label htmlFor="select-gender">성별</label>
        <select
          id="select-gender"
          className="border-1 w-max p-1 pr-1.5"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="남성">남성</option>
          <option value="여성" /* selected */>여성</option>
        </select>
      </div>
      <div className="flex items-center gap-1">
        <input
          type="checkbox"
          id="checkbox-input"
          checked={checked}
          onChange={toggle}
        />
        <label htmlFor="checkbox-input">동의</label>
      </div>
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
