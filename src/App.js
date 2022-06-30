
import './App.css';
import UserList from './Component/UserList';
import { useState, useRef, useReducer } from 'react'; // useRef ) id 값 따로 관리위해
import CreateUser from './Component/CreateUser';

const initialState = { // 상태관리 배열 🧡 useReducer
  inputs : {
    username : "", // 초기값 세팅
    email : ""
  },
  users : [ // 배열
  {
      id:1,
      username : 'green',
      email : 'green@gmail.com',
      active : false
  },
  {
      id:2,
      username : 'blue',
      email : 'blue@gmail.com',
      active : false
  },
  {
      id:3,
      username : 'yellow',
      email : 'yellow@gmail.com',
      active : false
  }
]
}

function reducer(state, action) { // reducer 함수 선언
  switch(action.type) { // 🧡 상태 관리
    case "CHANGE_INPUT" :
    return { // 하나만 바뀌니까 펼치기, 뿌려줘야됨
      ...state, // 기존 state 뿌려주기
      inputs : {
        ...state.inputs, // 원본 뿌리기
        [action.name] : action.value // 변경 값 받기 // key 변수로 하고 싶으면 [] 사용
      }
    };

    case "CREATE_USER" :
    return { // 둘 다 바뀌니까 펼지기 안해도됨
      inputs : initialState.inputs,
      users : state.users.concat(action.user) // (state.user)원본 배열에 하나 더하기(concat(action.user)) 하겠다.
    };

    case "DELETE_USER" :
    return {
      ...state,
      users : state.users.filter(user => user.id !== action.id) // id 가 다를 때
    };

    case "ACTIVE_USER" :
      return {
        ...state,
        users : state.users.map(user => // 일치하면 {실행} active 만 바뀜, ! = 반전
          user.id === action.id ? {...user, active : !user.active} : user)
      };

    default :
    return state;
  }
}


function App() {
  // 🧡 useReducer로 상태관리
  const [ state, dispatch ] = useReducer(reducer, initialState);
  // 객체 구조분해할당
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = (e) => {
        // 구조분해할당
    const{ name, value } = e.target; // target ) 어디 값이 변경되었는지 ? 구분위해
    dispatch ({
      type : "CHANGE_INPUT",
      name : name,
      value : value
    })
  }

  // 어려움
  const onCreate = () => { // user가 하나 추가됨 (업데이트)
    dispatch ({
      type : "CREATE_USER",
      user : { // 새로운 객체 만들기
        id : nextId.current,
        username : username,
        email : email, // key(이름, string) : value(값, 변수)
      }
    })
    nextId.current += 1;
  }

  // id 따로 관리
  const nextId = useRef(4); // 초기값 4 지정

  const onDelete = (id) => { // id 받아와서 넘겨주기
    dispatch({
      type : "DELETE_USER",
      id : id
    })
  }

  const onToggle = (id) => {
    dispatch({
      type : "ACTIVE_USER",
      id : id
    })
  }

  return (
    <div className="App">
      {/* (4) users={users} 추가 */}
      <UserList
      users={users}
      onDelete={onDelete}
      onToggle={onToggle}></UserList>
      <p>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</p>
      {/* 자식 컴포넌트에게 전달 */}
      <CreateUser
      email={email}
      username={username}
      onChange={onChange}
      onCreate={onCreate}
      ></CreateUser>
    </div>
  );
}

export default App;
