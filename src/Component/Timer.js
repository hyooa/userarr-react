import React, { useEffect } from 'react';

// π ** μΆκ°

const Timer = (props) => {
    // Mount ν  λ νΈμΆ, componentDidMount
    // UnMount ν  λ νΈμΆ, componentWillUnmount
    // Update ν  λ νΈμΆ, componentDidUpdate
    useEffect ( () => {
        const timer = setInterval(() => {
            console.log('νμ΄λ¨Έ λμκ°λ μ€ .....');
        }, 1000)
        return () => {
            clearInterval(timer); // Unmount λ  λ μ€ν
        }
    }, [])

    return (
        <div>
            νμ΄λ¨Έλ₯Ό μ€νν©λλ€.
        </div>
    );
};

export default Timer;