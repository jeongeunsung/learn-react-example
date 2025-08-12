export default function Output(props) {
  
  let classNames = 'output'
  
  if (props.isAnimate) {
    /* 컴포넌트 속서: 상태를 제어하는 클래스 이름 */
    // console.log(props.isAnimate)
    classNames += ' is-animate'
  }

  return React.createElement(
    'output', 
    { className: classNames },
    props.children
  )
}

// JavaScript 방식 (명령형 프로그래밍)
// document.querySelector('.output').addEventListener('animationend', (e) => [
//   e.currentTarget.classList.remove('is-animate')
// ])