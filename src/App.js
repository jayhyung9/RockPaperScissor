import Box from "./component/Box";
import './App.css';
import {useState} from"react"


//1. 박스 2개 (타이틀, 사진, 결과)
//2. 버튼 3개 (가위, 바위, 보)
//3. 버튼과 사진 연동(버튼 클릭 시 사진 반영)
//4. 컴퓨터는 랜덤하게 아이템이 선택
//5. 3, 4번의 결과를 가지고 누가 이겼는지 승패 반영
//6. 승패에 따라 박스 테두리, 글씨색 색 변경(이기면 초록, 지면 빨강, 비기면 검정)

const choice = {
  rock : {
name :"Rock",
img :"https://m.media-amazon.com/images/I/61W8BVTF10L.jpg"
  },
  paper : {
    name :"paper",
    img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5V6tWts93Od4sjC082k9DWFvCRK4NGUlfxg&s"
  },
  scissor : {
    name :"scissor",
    img :"https://m.media-amazon.com/images/I/51zbr3M5HVL.jpg"
  }
};

function App() {
const [userSelect,setUserSelect] = useState(null)
const [computerSelect,setComputerSelect] = useState(null)

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);

  };


const random = () => {
  let keylist = Object.keys(choice);
  let randomIndex = Math.floor(Math.random() * keylist.length);
let randomChoice = keylist[randomIndex];
setComputerSelect(choice[randomChoice]);
};
    

  return ( 
    <div>
    <div className="main">
      <Box title="you" item={userSelect}/>
      < Box title="computer" item={computerSelect}/>
    </div>
    <div className="main">
      <button onClick={()=> {play("scissor"); random()}}> <i class="fa-solid fa-hand-scissors"> </i></button>
      <button onClick={()=> {play("rock"); random()}}> <i class="fa-solid fa-hand-back-fist"> </i></button>
      <button onClick={()=> {play("paper"); random()}}> <i class="fa-solid fa-note-sticky"> </i></button>
    </div>
    </div>
  );
}

export default App;
