import React, { useState, useEffect } from 'react';

function HookExample(props){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("执行了一下")
    })
    function getMyName(){
        return 'tanqingqing'
    }

    useEffect(()=>{
        console.log("myName is:",getMyName())
    })

    return (
        <div>
            <p>you clicked { count } 次</p>
            <h1>{props.title}</h1>
            <button onClick={()=>setCount(count + 1)}>add one</button>
        </div>
    )
}

export default HookExample;
