import React, { useState } from 'react';
import Timer from './Component/Timer';

// π ** μΆκ°

const App3 = (props) => {
    const [ showTimer, setShowTimer ] = useState(false);
    return (
        <div>
            {/* true μΌ λλ§ νμ΄λ¨Έ μ€ν */}
            {showTimer && <Timer></Timer>}

            <button onClick={ () => { setShowTimer(!showTimer) } }>ν΄λ¦­νμΈμ</button>
        </div>
    );
};

export default App3;