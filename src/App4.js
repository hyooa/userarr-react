import React, { Component, useState, useEffect } from 'react';

// ๐ ** ์ถ๊ฐ

const App4 = (props) => {

    // ํด๋์ค ์ปดํฌ๋ํธ ๋ณด์ด๊ธฐ
    const [funShow, setFunShow ] = useState(true); // ์ด๊ธฐ๊ฐ

    return (
        <div>
            <h1>Hello world</h1>

            <input
            type="button"
            value="ํด๋์ค ์ปดํฌ๋ํธ ๋ณด์ด๊ธฐ/์๋ณด์ด๊ธฐ"
            onClick={ () => {setFunShow(!funShow)} } // false ๊ฐ ๋๋ฉด ๋ณด์ด์ง ์์
            ></input>

            { funShow && <ClassComp initNumber={2}></ClassComp> }
        </div>
    );
};

// ๐ class ์ปดํฌ๋ํธ ๋ง๋ค๊ธฐ
class ClassComp extends Component {
    // state ์์ฑ
    // props ๊ฐ์ state ๊ฐ์ผ๋ก ์ง์ 
    state = {
        number : this.props.initNumber,
        date : new Date().toLocaleTimeString(),
    }

    // ๋๋๊ฐ ๋๋ ๋ค์ ์คํ์ฌ์ดํด ๋ฉ์๋
    componentDidMount() {
        console.log("classํ ์ปดํฌ๋ํธ => componentDidMount");
    }

    // ์ปดํฌ๋ํธ Unmount๋๊ธฐ ์ง์  ์คํ์ฌ์ดํด ๋ฉ์๋
    componentWillUnmount() {
        console.log("classํ ์ปดํฌ๋ํธ => componentWillUnmount");
    }

    render () {
        console.log("classํ ์ปดํฌ๋ํธ => rander");
        return (
            <div className='container'>
                <h2>ํด๋์ค ์ปดํฌ๋ํธ</h2>
                <p>Number : <span>{this.state.number}</span></p>
                <p>Date : <span>{this.state.date}</span></p>
            </div>
        )
    }
}

export default App4;