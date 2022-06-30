import React, { Component, useState, useEffect } from 'react';

// 💜 ** 추가

const App4 = (props) => {

    // 클래스 컴포넌트 보이기
    const [funShow, setFunShow ] = useState(true); // 초기값

    return (
        <div>
            <h1>Hello world</h1>

            <input
            type="button"
            value="클래스 컴포넌트 보이기/안보이기"
            onClick={ () => {setFunShow(!funShow)} } // false 가 되면 보이지 않음
            ></input>

            { funShow && <ClassComp initNumber={2}></ClassComp> }
        </div>
    );
};

// 💚 class 컴포넌트 만들기
class ClassComp extends Component {
    // state 생성
    // props 값을 state 값으로 지정
    state = {
        number : this.props.initNumber,
        date : new Date().toLocaleTimeString(),
    }

    // 랜더가 끝난 다음 실행사이클 메서드
    componentDidMount() {
        console.log("class형 컴포넌트 => componentDidMount");
    }

    // 컴포넌트 Unmount되기 직전 실행사이클 메서드
    componentWillUnmount() {
        console.log("class형 컴포넌트 => componentWillUnmount");
    }

    render () {
        console.log("class형 컴포넌트 => rander");
        return (
            <div className='container'>
                <h2>클래스 컴포넌트</h2>
                <p>Number : <span>{this.state.number}</span></p>
                <p>Date : <span>{this.state.date}</span></p>
            </div>
        )
    }
}

export default App4;