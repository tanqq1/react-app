import React, { Component } from 'react';
import RefsInClass from './refsInClass';
import RefsInFunction from './refsInFunction';
import RefsInHooks from './refsInHooks';

export default class RefsContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            buttonText:'播放音频'
        }
    }

    getFunction1 = () => {

    }

    onPauseAudio = () => {
        if(this.funsRef.paused){
            this.funsRef.play();
            this.setState({
                buttonText:'暂停音频'
            })
        }else{
            this.funsRef.pause()
            this.setState({
                buttonText:'播放音频'
            })
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.onPauseAudio}>{this.state.buttonText}</button>
                <p>
                refs提供了一种让我们直接访问DOM元素或在render方法中创建的react元素,
                    对于DOM的访问，更相当于DOM元素的绑定，例如：document.getElemntByID();;
                    对于React的render,ref对象接收的是组件的挂载的实例
                </p>
                <p>
                    refs的创建方法：1、React.createRef(), 2、回调方法:ref = {el => this.reft = el}
                </p>
                <p>
                    不能再函数组件上使用ref属性，因为他们没有实例，及无法听过this访问属性；；
                    但是可以再函数组件内部使用ref
                </p>
                <RefsInClass />
                <RefsInFunction ref={el => this.funsRef = el}></RefsInFunction>
                <RefsInHooks />
            </div>
        )
    }
}