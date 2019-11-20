import React, { useState, useEffect } from 'react';
import GetTable from './getTable';
import UseIsOdd from './useIsOdd';

function HookExample(props){
    const [count,setCount] = useState(0);
    const [times,setTimes] = useState([{times:5}]);
    const [initalValue, setInitalValue]  = useState('')
    // useEffect接受第二个参数，只有当第二个参数发生改变时才执行该useEffect,可以使state,也可以是props的值
    useEffect(()=>{
        setTimes('10');
    },[times])   

    useEffect(()=>{
        console.log("第一级hook");
        setInitalValue('second');
    },[])

    function getName(){
        console.log("my name is tqq!")
    }

    function removeTableNode(){
        let node  = document.getElementById('tables');
        if(node.children.length > 0){
            node.removeChild(node.children[0]);
        }
    }

    function insertTableNode(){
        // let node  = document.getElementById('tables');
        setInitalValue('first')
    }
    
    useEffect(getName,[])
    useEffect(() => getName(),[])
    const isOddTimes = UseIsOdd(count);

    return (
        <div>
            <p>you clicked { count } 次</p>
            <h1>{props.title}</h1>
            <button onClick={()=>setCount(count + 1)}>add one</button>
            <h1>单击了{isOddTimes ? '奇' : '偶'}数次</h1>
            <div id="test">
                <button style={{color:'red',backgroundColor:'#999999', margin:10}} onClick={removeTableNode}>clear</button>
                <button style={{backgroundColor:'#1890ff', margin:10}} onClick={insertTableNode}>add</button>
            </div>
            <div id="tables">
                <GetTable onchangeCount={(count) => setCount(count)} initalValue={initalValue} /> 
            </div>
        </div>
    )
}

export default HookExample;
