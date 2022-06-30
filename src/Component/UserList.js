import React, { useEffect } from 'react'; // 💜 ** 추가
import './UserStyle.css';
// import { useEffect } from 'react';

const User = ({user, onDelete, onToggle}) => {
    
    // 💜 ** 추가
    useEffect(() => { // 마운트 될 때 실행됨
        console.log('컴포넌트가 화면에 나타남');
        return () => { // 언마운트 될 때 실행됨
            console.log('컴포넌트가 화면에서 사라짐');
        }
    }, [])

    return (
        <div>
            {/* 💛 추가 */}
            {/* && ) 하나라도 false면 끝남, user.active가 true여야지 'active'까지 감 */}
            {/* <span className = {user.active && 'active'}> */}
            {/* 삼항연산자 ) null 또는 "" 빈칸 넣기 */}
            <span
            className = {user.active ? 'active' : null}
            onClick={ () => {onToggle(user.id)} }>
            유저네임 : {user.username}, 
            이메일 : {user.email} </span>

            <button onClick={() => { // 바로 못불러서 함수로 호출
                onDelete(user.id);
            }}>삭제</button>
        </div>
    )
}

const UserList = ({users, onDelete, onToggle}) => { // 🧡 (4) {users} 부모 컴포넌트에 데이터 넣어두고 자식 컴포넌트는 props로 전달만하기
    // const users = [
    //     {
    //         id:1,
    //         username : 'green',
    //         email : 'green@gmail.com'
    //     },
    //     {
    //         id:2,
    //         username : 'blue',
    //         email : 'blue@gmail.com'
    //     },
    //     {
    //         id:3,
    //         username : 'yellow',
    //         email : 'yellow@gmail.com'
    //     }
    // ];

    return (
        <div>
            {/* (1) 💚 배열 메서드) "key" prop --> ERROR --> key 속성지정해주기 */}
                            {/* () 보라색 소괄호 생략 가능 */}
            {users.map (user =>( <User user={user} key={user.id} onDelete={onDelete} onToggle={onToggle} /> ))}

            {/* (2)
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} /> */}

            {/* (3)
            <div>
                유저네임 : {users[0].username}
                <span>이메일 : {users[0].email}</span>
            </div>
            <div>
                유저네임 : {users[1].username}
                <span>이메일 : {users[1].email}</span>
            </div>
            <div>
                유저네임 : {users[2].username}
                <span>이메일 : {users[2].email}</span>
            </div> */}
        </div>
    );
};

export default UserList;