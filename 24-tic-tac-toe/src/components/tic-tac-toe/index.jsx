import { useState } from 'react'
import { GRID, INITIAL_SQUARES, PLAYER, getPlayerName } from './constants'
import './style.css'

export default function TicTacToe() {
  return (
    <div className="Game">
      <Board />
      <History />
    </div>
  )
}

// --------------------------------------------------------------------------

function Board() {
  return (
    <div className="Board">
      <Status />
      <SquaresGrid />
    </div>
  )
}

function Status() {
  return (
    <h2 className="Status" role="status">
      다음 플레이어 🟨
    </h2>
  )
}

function SquaresGrid() {
  // 게임 상태 설정
  // 게임 보드를 구성하는 사각형을 관리하는 상태
  const [squares, setSquares] = useState(INITIAL_SQUARES)
  // 게임 진행하는 순서 상태
  const [gameIndex, setGameIndex] = useState(0)
  // 파생된 상태: 게임 진행되는 순서(상태)에 의존하는 데이터(상태)
  // (React: derived state / Vue: computed property)
  const nextPlayer = gameIndex % 2 === 0 ? PLAYER.ONE : PLAYER.TWO
  // 부수 효과
  // - 이벤트 핸들러 (handle*)
  // - 이펙트 훅 (useEffect)
  const playGame = (squareIndex, e) => {
    // 접근성 준수를 위해 필요 (리액트의 렌더링과 무관한 부수 효과)
    if (e.target.getAttribute('aria-disabled') === 'true') return
    // 게임 인덱스 상태 업데이트
    const nextGameIndex = gameIndex + 1
    setGameIndex(nextGameIndex)
    // 게임 스퀘어 상태 업데이트
    const nextSquares = squares.map((square, index) =>
      index === squareIndex ? nextPlayer : square
    )
    setSquares(nextSquares)
  }

  return (
    <div
      role="grid"
      className="Squares"
      aria-label="틱택토 게임판"
      aria-rowcount={GRID.ROWS}
      aria-colcount={GRID.COLS}
    >
      {squares.map((square, index) => {
        return (
          <SquareGridCell key={index} index={index} onPlay={playGame}>
            {square}
          </SquareGridCell>
        )
      })}
    </div>
  )
}

function SquareGridCell({ children, index, onPlay }) {
  // 이 칸이 이미 선택된 경우, 비활성 상태 (null이 아닌 경우)
  const isDisabled = !!children
  // 현재 칸의 플레이어 이름 ('플레이어 1 | 2' 또는 '비어 있음')
  const playerName = getPlayerName(children)
  // 그리드 셀 레이블 설정 (예: '1번째 칸, 플레이어1')
  const label = `${index + 1}번째 칸, ${playerName}`
  // 현재 칸의 행 인덱스 계산 (인덱스를 1부터 시작하도록 변환)
  const rowIndex = Math.floor(index / GRID.ROWS) + 1
  // 현재 칸의 열 인덱스 계산 (인덱스를 1부터 시작하도록 변환)
  const colIndex = (index % GRID.COLS) + 1
  // 칸 클릭 시, 실행될 핸들러 함수
  // 부모 컴포넌트로부터 전달받은 onPlay 함수 호출
  const handlePlay = (e) => onPlay(index, e)

  return (
    <button
      role="gridcell"
      className="Square"
      onClick={handlePlay}
      aria-disabled={isDisabled}
      aria-rowindex={rowIndex}
      aria-colindex={colIndex}
      aria-label={label}
    >
      {children}
    </button>
  )
}

// --------------------------------------------------------------------------

function History() {
  return (
    <div className="History">
      <ol className="HistoryList">
        <li className="HistoryListItem">
          <button type="button" className="HistoryButton">
            게임 시작!
          </button>
        </li>
        <li className="HistoryListItem">
          <button
            type="button"
            className="HistoryButton"
            aria-label="게임 #1 이동"
          >
            게임 #1
          </button>
        </li>
        <li className="HistoryListItem">
          <button
            type="button"
            className="HistoryButton"
            aria-label="게임 #2 이동"
            disabled
          >
            게임 #2
          </button>
        </li>
      </ol>
    </div>
  )
}
