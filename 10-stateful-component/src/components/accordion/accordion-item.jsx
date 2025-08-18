/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './accordion-item.css'

/**
 * AccordionItem 컴포넌트
 * @param {Object} props
 * @param {number} props.index - 질문/답변의 인덱스
 * @param {string} props.question - 자주 묻는 질문
 * @param {string} props.answer - 답변
 * @param {boolean} props.isOpen - 아코디언 아이템 열림/닫힘 여부
 * @param {(nextActiveIndex: number) => void} props.onActive - 아코디언 아이템 열리도록 설정하는 기능
 */
export default function AccordionItem({
  index,
  question,
  answer,
  isOpen = false,
  onActive,
}) {
  const classNames = `accordion-item ${isOpen ? 'is-open' : ''}`.trim()
  const buttonLabel = isOpen ? '닫힘 전환' : '열림 전환'
  const handleActive = () => onActive?.(index)

  return (
    <div className={classNames}>
      <dt onClick={handleActive}>
        {question}{' '}
        <button type="button" aria-label={buttonLabel} aria-pressed={isOpen}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </dt>
      <dd className={isOpen ? 'is-open' : ''}>{answer}</dd>
    </div>
  )
}
