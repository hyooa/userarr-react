import React, { useEffect, useState } from 'react';

// 💜 ** 추가

const App2 = () => {
    const [ count, setCount ] = useState(1); // 초기값 1
    const [ input, setInput ] = useState("");

    useEffect(() => {
        // componentDidMount && componentDidUpdate 시 호출
        console.log('렌더링 될 때마다 useEffect 호출');
    })
    useEffect(() => {
        // useEffect 에 두번째 인자로 []를 넘겨주면 마운트 될 때만 호출됨
        // conponentDidMount 만 호출 , 업데이트시 호출 X
        console.log('처음 마운트 될 때만 useEffect 호출');
    }, []) // 빈배열
    useEffect(() => {
        console.log('배열요소안의 값(conut)이 업데이트 되면 useEffect 호출');
    }, [count]) // 관리하는 애 넣어줌

    // 버튼 클릭시 실행
    const handleCount =() => {
        setCount(count +1);
    }

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <button onClick={handleCount}>수정하기</button>
            <span>count : {count}</span>
            <input onChange={onChange} value={input}></input>
        </div>
    );
};

export default App2;