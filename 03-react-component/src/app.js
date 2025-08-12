import { Output, Logo, Shortcut } from './components/index.js'

export default function App(props) {
  return React.createElement(
    'div',
    { className: 'randomCountUpApp' },
    React.createElement(Logo),
    renderLists(1, props),
    React.createElement(Shortcut)
  )
}

function renderLists(length, props) {
  return Array.from({ length }).map((_, index) =>
    React.createElement(
      Output,
      {
        key: index,
        isAnimate: props.count < props.targetCount ? true : false,
      },
      props.count + index
    )
  )
}
