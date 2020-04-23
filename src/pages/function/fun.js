import React, { useEffect, useState } from 'react';
import {bubbleSort, selectSort, throttle, debounce, } from '../../common/utils'


function FunText(){
    const [viewWith, setViewWith] = useState(window.innerWidth)

    // useEffect(() => {
    //     document.addEventListener('keydown',throttle(()=> {console.log("节流")},4000,1, 2, 3, 4))
    //     document.addEventListener('keydown',debounce(() => event(1, 2, 3),4000, 1, 2, 3, 4))
        
    // },[])


    // const a = {
    //     value: 'hello'
    // }
    // const b = {
    //     value: 'sosoo'
    // }

    // const c = {
    //     value:'yes'
    // }
    // function getName(name, age){
    //     console.log(name)
    //     console.log(age)
    //     console.log("value....",this.value)
    // }
    // getName.myCall(a,"tanqq","22");  
    // getName.myApply(b,["at","16"]);
    // getName.myBind(c,'aa','19')();

    "stringllll".mySlice(1,4);
    
   function event(){
       console.log("防抖")
   }

    // const tArr = [22,17,4,7, 2, 8, 3, 78, 8, 90, 2, 37];
    // bubbleSort(tArr)
    // selectSort(tArr)
    return (
        <div>
            函数节流与防抖
            <p>当前屏幕宽度是：{viewWith}</p>
            <input />
            <br />
            <input onChange={(e) => {console.log("输入的参数是",e.target.value)} } />
        </div>
    )
}

export default FunText;
