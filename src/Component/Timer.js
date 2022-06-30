import React, { useEffect } from 'react';

// 💜 ** 추가

const Timer = (props) => {
    // Mount 할 때 호출, componentDidMount
    // UnMount 할 때 호출, componentWillUnmount
    // Update 할 때 호출, componentDidUpdate
    useEffect ( () => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는 중 .....');
        }, 1000)
        return () => {
            clearInterval(timer); // Unmount 될 때 실행
        }
    }, [])

    return (
        <div>
            타이머를 실행합니다.
        </div>
    );
};

export default Timer;