import React from 'react';
import '../../index.css';
import Audio from '../../static/audio2.m4a';

// 如何在函数组件中使用ref
// 通过refs来控制录音的播放与暂停
// React.forwardRef并不推荐用
const RefsInFunction =  React.forwardRef((props,ref) => {
    return (
        <div>
            <audio 
                style={{width:400,height:20}} 
                src={Audio} 
                // controls="controls"
                // autoPlay={true}
                // loop={true}
                ref={ref}
            >
                what
            </audio>
        </div>
    )

})

export default RefsInFunction;
