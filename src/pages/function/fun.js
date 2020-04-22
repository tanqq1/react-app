import React, { useEffect, useState } from 'react';
import {bubbleSort, selectSort, throttle, debounce } from '../../common/utils'


function FunText(){
    const [viewWith, setViewWith] = useState(window.innerWidth)

    useEffect(() => {
        document.addEventListener('keydown',throttle(()=> {console.log("节流")},4000,1, 2, 3, 4))
        document.addEventListener('keydown',debounce(() => {console.log("防抖")},4000, 1, 2, 3, 4))
    },[])


   

    const tArr = [22,17,4,7, 2, 8, 3, 78, 8, 90, 2, 37];
    bubbleSort(tArr)
    selectSort(tArr)
    return (
        <div>
            函数节流与防抖
            <p>当前屏幕宽度是：{viewWith}</p>
            <input />
        </div>
    )
}

export default FunText;
