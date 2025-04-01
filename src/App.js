import Box from "./component/Box";
import './App.css';


//1. 박스 2개 (타이틀, 사진, 결과)
//2. 버튼 3개 (가위, 바위, 보)
//3. 버튼과 사진 연동(버튼 클릭 시 사진 반영)
//4. 컴퓨터는 랜덤하게 아이템이 선택
//5. 3, 4번의 결과를 가지고 누가 이겼는지 승패 반영
//6. 승패에 따라 박스 테두리, 글씨색 색 변경(이기면 초록, 지면 빨강, 비기면 검정)
function App() {
  return (
    <div>
      <Box />
    </div>
  );
}

export default App;
