import React, { useEffect } from 'react'; // ๐ ** ์ถ๊ฐ
import './UserStyle.css';
// import { useEffect } from 'react';

const User = ({user, onDelete, onToggle}) => {
    
    // ๐ ** ์ถ๊ฐ
    useEffect(() => { // ๋ง์ดํธ ๋  ๋ ์คํ๋จ
        console.log('์ปดํฌ๋ํธ๊ฐ ํ๋ฉด์ ๋ํ๋จ');
        return () => { // ์ธ๋ง์ดํธ ๋  ๋ ์คํ๋จ
            console.log('์ปดํฌ๋ํธ๊ฐ ํ๋ฉด์์ ์ฌ๋ผ์ง');
        }
    }, [])

    return (
        <div>
            {/* ๐ ์ถ๊ฐ */}
            {/* && ) ํ๋๋ผ๋ false๋ฉด ๋๋จ, user.active๊ฐ true์ฌ์ผ์ง 'active'๊น์ง ๊ฐ */}
            {/* <span className = {user.active && 'active'}> */}
            {/* ์ผํญ์ฐ์ฐ์ ) null ๋๋ "" ๋น์นธ ๋ฃ๊ธฐ */}
            <span
            className = {user.active ? 'active' : null}
            onClick={ () => {onToggle(user.id)} }>
            ์ ์ ๋ค์ : {user.username}, 
            ์ด๋ฉ์ผ : {user.email} </span>

            <button onClick={() => { // ๋ฐ๋ก ๋ชป๋ถ๋ฌ์ ํจ์๋ก ํธ์ถ
                onDelete(user.id);
            }}>์ญ์ </button>
        </div>
    )
}

const UserList = ({users, onDelete, onToggle}) => { // ๐งก (4) {users} ๋ถ๋ชจ ์ปดํฌ๋ํธ์ ๋ฐ์ดํฐ ๋ฃ์ด๋๊ณ  ์์ ์ปดํฌ๋ํธ๋ props๋ก ์ ๋ฌ๋งํ๊ธฐ
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
            {/* (1) ๐ ๋ฐฐ์ด ๋ฉ์๋) "key" prop --> ERROR --> key ์์ฑ์ง์ ํด์ฃผ๊ธฐ */}
                            {/* () ๋ณด๋ผ์ ์๊ดํธ ์๋ต ๊ฐ๋ฅ */}
            {users.map (user =>( <User user={user} key={user.id} onDelete={onDelete} onToggle={onToggle} /> ))}

            {/* (2)
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} /> */}

            {/* (3)
            <div>
                ์ ์ ๋ค์ : {users[0].username}
                <span>์ด๋ฉ์ผ : {users[0].email}</span>
            </div>
            <div>
                ์ ์ ๋ค์ : {users[1].username}
                <span>์ด๋ฉ์ผ : {users[1].email}</span>
            </div>
            <div>
                ์ ์ ๋ค์ : {users[2].username}
                <span>์ด๋ฉ์ผ : {users[2].email}</span>
            </div> */}
        </div>
    );
};

export default UserList;