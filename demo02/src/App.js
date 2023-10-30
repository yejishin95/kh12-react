import khLogo from './kh2.png';
//JSX에서는 프로그래밍 변수를 속성으로 넣기 위해 {}를 사용
// src="hello" 로 되어 있으면 경로를 의미
// src={hello} 로 되어 있으면 변수를 의미

//JSX에서는 모든 태그가 닫혀야 한다
function App() {
  var width = 300;
  return (
    <div>
    <h1>KH정보교육원 React 수업자료</h1>
    <img src="kh.jpg" width={width}></img>
    <hr></hr>
    <img src={khLogo} width={width}></img>
    </div>

  );
}

export default App;
