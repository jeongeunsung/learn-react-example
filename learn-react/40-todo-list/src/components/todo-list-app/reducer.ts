import type { Draft } from 'immer'
import type { Todo } from './types'

// --------------------------------------------------------------------------
// 타입 선언

interface State {
  todos: Todo[]
}

type Action =
  | { type: typeof ACTION.ADD; payload: { newDoIt: Todo['doit'] } }
  | { type: typeof ACTION.REMOVE; payload: { removeTodoId: Todo['id'] } }
  | { type: typeof ACTION.TOGGLE; payload: { toggleTodoId: Todo['id'] } }

// --------------------------------------------------------------------------
// 액션 타입

const ACTION = {
  ADD: '@todolist/add-todo',
  REMOVE: '@todolist/remove-todo',
  TOGGLE: '@todolist/toggle-done',
} as const

// --------------------------------------------------------------------------
// 액션 크리에이터 (형식이 지정된 액션을 반환하는 함수)
// 액션 = { type: 어떤 일을 할 것인지, payload: 무엇을 전달할 것인지 }

export const addAction = (newDoIt: Todo['doit']): Action => ({
  type: ACTION.ADD,
  payload: { newDoIt },
})

export const removeAction = (removeTodoId: Todo['id']): Action => ({
  type: ACTION.REMOVE,
  payload: { removeTodoId },
})

export const toggleAction = (toggleTodoId: Todo['id']): Action => ({
  type: ACTION.TOGGLE,
  payload: { toggleTodoId },
})

// --------------------------------------------------------------------------
// 리듀서 함수
// 컴포넌트 -> 사용자 액션 -> 액션 생성 -> 디스패치 -> 리듀서 -> 컴포넌트 -> 화면 렌더링

export default function todoListReducer(draft: Draft<State>, action: Action) {
  switch (action.type) {
    case ACTION.ADD: {
      const { newDoIt } = action.payload
      const newTodoItem: Todo = {
        id: crypto.randomUUID(),
        doit: newDoIt,
        done: false,
      }
      draft.todos.unshift(newTodoItem)
      break
    }

    case ACTION.REMOVE: {
      const { removeTodoId } = action.payload
      const removeIndex = draft.todos.findIndex(
        (todo) => todo.id === removeTodoId
      )
      draft.todos.splice(removeIndex, 1)
      break
    }

    case ACTION.TOGGLE: {
      const { toggleTodoId } = action.payload
      const index = draft.todos.findIndex((todo) => todo.id === toggleTodoId)
      const todo = draft.todos[index]
      todo.done = !todo.done
      break
    }

    default: {
      return draft
    }
  }
}

// --------------------------------------------------------------------------
// 초기화(init) 함수

const { localStorage } = globalThis
const TODOLIST_KEY = '@todolist'

export const init = (initialValue: State): State => {
  return getTodoListStorageData() ?? initialValue
}

// --------------------------------------------------------------------------
// 스토리지 데이터 관리

// 브라우저 스토리지에서 데이터 가져오기
const getTodoListStorageData = () => {
  const storageData = localStorage.getItem(TODOLIST_KEY)
  return storageData ? JSON.parse(storageData) : null
}

// 브라우저 스토리지에 데이터 설정하기
export const setTodoListStorageData = (newStorageData: State): void => {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(newStorageData))
}

// 브라우저 스토리지에서 데이터 제거하기
export const removeTodoListStorageData = (): void => {
  if (!getTodoListStorageData()) return
  localStorage.removeItem(TODOLIST_KEY)
}
