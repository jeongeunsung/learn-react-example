import { type RefObject, useRef, useState } from 'react'
import { tw } from '@/utils'
import { useTodoList } from '../../context'
import type { Todo } from '../../types'
import S from './style.module.css'

export default function TodoItem({ item }: { item: Todo }) {
  const { remove, toggle } = useTodoList()
  const handleRemoveTodo = () => remove(item.id)
  const handleToggleTodo = () => toggle(item.id)

  const editInputRef = useRef<HTMLInputElement>(null)
  const [editMode, setEditMode] = useState<boolean>(false)

  const handleEditModeOn = () => {
    setEditMode(true)
  }

  const handleEditModeOff = () => setEditMode(false)

  if (editMode) {
    return (
      <EditMode
        ref={editInputRef}
        item={item}
        onEditModeOff={handleEditModeOff}
      />
    )
  }

  return (
    <li className={S.listItem}>
      <div className={tw(S.formControl, 'form-control row h-11')}>
        <input
          id={item.id}
          type="checkbox"
          checked={item.done}
          onChange={handleToggleTodo}
          data-list-item-checkbox
        />
        <label
          htmlFor={item.id}
          className={tw(S.listItemLabel, 'select-none')}
          data-list-item-label
        >
          {item.doit}
        </label>
      </div>
      <button
        className="button"
        type="button"
        onClick={handleEditModeOn}
        data-button-edit
      >
        수정
      </button>
      <button
        className="button"
        type="button"
        onClick={handleRemoveTodo}
        data-button-delete
      >
        삭제
      </button>
    </li>
  )
}

function EditMode({
  ref: inputRef,
  item,
  onEditModeOff,
}: {
  ref: RefObject<HTMLInputElement | null>
  item: Todo
  onEditModeOff: () => void
}) {
  const { edit } = useTodoList()

  const handleSave = () => {
    const input = inputRef.current
    if (input) edit(item.id, input.value)
    onEditModeOff()
  }

  return (
    <li className={S.listItem} data-list-item-edit-mode>
      <div className={tw(S.formControl, 'form-control row')}>
        <input
          ref={inputRef}
          id={item.id}
          type="text"
          defaultValue={item.doit}
        />
      </div>
      <button
        className="button"
        type="button"
        onClick={handleSave}
        data-button-save
      >
        저장
      </button>
    </li>
  )
}
