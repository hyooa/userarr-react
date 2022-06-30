import React, { useState } from 'react';
import Timer from './Component/Timer';

// 💜 ** 추가

const App3 = (props) => {
    const [ showTimer, setShowTimer ] = useState(false);
    return (
        <div>
            {/* true 일 때만 타이머 실행 */}
            {showTimer && <Timer></Timer>}

            <button onClick={ () => { setShowTimer(!showTimer) } }>클릭하세요</button>
        </div>
    );
};

export default App3;