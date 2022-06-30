
// import './App.css';
// import UserList from './Component/UserList';
// import { useState, useRef } from 'react'; // useRef ) id 값 따로 관리위해
// import CreateUser from './Component/CreateUser';

// function App() {
//   // 💚 CreateUser 의 입력 input을 상태관리
//   const [inputs, setInputs] = useState({ // input 값 관리
//     username : "", // 초기값 세팅
//     email : ""
//   });

//   const onChange = (e) => {
//     const {name, value} = e.target;
//     setInputs({
//       ...inputs, // 원래 값 받아오기
//       [name] : value // 업데이트 해줄 애만 덮어씌우기
//     })
//     // console.log(inputs);
//   }

//   const {username, email} = inputs; // inputs 는 객체여서 {} 중괄호로 나눔

// // useState() 실행 --> 배열 return
// // arr[0] = 상태
// // arr[1] = 상태를 변경해주는 함수

// // const users = arr[0];
// // const setState = arr[1];

// // 🧡 input의 상태관리는 App.js 에서, users 내용 추가
// // 부모에서 자식컴포넌트에 값 전달
// const [ users, setUsers ] = useState([ // useState 배열을 반환, 바로 구조분해할당을 해줌
//     {
//         id:1,
//         username : 'green',
//         email : 'green@gmail.com',
//         active : false
//     },
//     {
//         id:2,
//         username : 'blue',
//         email : 'blue@gmail.com',
//         active : false
//     },
//     {
//         id:3,
//         username : 'yellow',
//         email : 'yellow@gmail.com',
//         active : false
//     }
// ]);
// // 💚 id 따로 관리
// const nextId = useRef(4); // 초기값 4 지정

// // 누르면 ) users 배열에 새로운 user 객체를 추가
// const onCreate = () => { // 배열에 새로운 항목을 추가하는 함수

//   const user = { // 새로운 user 객체 생성
//     id : nextId.current,
//     username, // key : value 같을 때는 생략가능
//     email : email,
//     active : false // 💛 추가
//   }

//   setUsers([...users, user]); // 배열 합치기, 값 변경은 setUsers 사용
  
//   setInputs({
//     username : "", // 값 다 초기화
//     email : ""
//   })
//   nextId.current += 1; // ref는 무조건 current로 값에 접근
// }

// // const users = [ // 배열이지만 관리(setUsers)되고있지는 않음
// //     {
// //         id:1,
// //         username : 'green',
// //         email : 'green@gmail.com'
// //     },
// //     {
// //         id:2,
// //         username : 'blue',
// //         email : 'blue@gmail.com'
// //     },
// //     {
// //         id:3,
// //         username : 'yellow',
// //         email : 'yellow@gmail.com'
// //     }
// // ];


// // 💛 useres 배열에 해당 id는 삭제
// // filter --> 해당하는 id와 user객체의 id가 다른 객체만 새배열로 반환
// const onDelete = (id) => {
//   setUsers(users.filter(user => id !== user.id)); // user 를 받아서 id랑 userId 다를 때 호출
// }
// // 💛 배열 메서드 map
// const onToggle = (id) => {
//                                                           // 같으면 active 변경, 다르면 원래 값 돌려줌
//   setUsers(users.map(user => id === user.id ? {...user, active : !user.active} : user ));
// }


//   return (
//     <div className="App">
//       {/* (4) users={users} 추가 */}
//       <UserList
//       users={users}
//       onDelete={onDelete}
//       onToggle={onToggle}></UserList>
//       <p>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</p>
//       {/* 자식 컴포넌트에게 전달 */}
//       <CreateUser
//       email={email}
//       username={username}
//       onChange={onChange}
//       onCreate={onCreate}
//       ></CreateUser>
//     </div>
//   );
// }

// export default App;