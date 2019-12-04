import React, { Component } from 'react';

export default class RefsInClass extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        this.getClassFuns = this.getClassFuns.bind(this);
        this.inputRef = React.createRef();
    }


    getClassFuns(text){
        if(text === 'one'){
            this.inputRef.current.focus();
        }else {
            this.inputRef2.focus();
        }
    }

    render(){
        return (
            <div>
                <p>refs in class</p>
                <button onClick={() => this.getClassFuns('one')}>获取焦点1</button>
                <button onClick={() => this.getClassFuns('two')}>获取焦点2</button>
                <input onChange={()=>{}} ref={this.inputRef} />
                <input onChange={()=>{}} ref={el => this.inputRef2 = el} />
            </div>
        )
    }
}
