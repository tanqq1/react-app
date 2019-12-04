import React, { useState, useRef, useCallback } from 'react';

// 在hooks中使用refs
function RefsInHooks(props){
    const [height, setHeight] = useState(0);
    const refHooks = useRef(null); //每次返回的是同一个示例,ref的值发生变化时也不会通知我们

    const getRefHooks = () => {
        refHooks.current.focus();
    }

    const measureRef = useCallback(node => {
        if(node !== null){
            setHeight(node.getBoundingClientRect().height);
        }
    },[])
    return (
        <div>
            <p>hooks里的refs</p>
            <h3 ref={measureRef}> hello world! </h3>
            <h5>the above header is {Math.round(height)} px tall</h5>
            <button onClick={getRefHooks}>获取refs焦点</button>
            <input ref={refHooks} />
        </div>
    )
}

export default RefsInHooks;
