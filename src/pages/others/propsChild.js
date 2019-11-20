// 组合和继承
import React, { Component } from 'react';

function FancyBorder(props){
    return (
        <div style={{backgroundColor:'#aaffaa'}}>
            {props.children}
        </div>
    )
}

function WelcomeDialog(props){
    return (
        <FancyBorder>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            {props.children}
        </FancyBorder>
    )
}

class Dialog extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'Welcome',
            text:'thank you fo visiting our spacecraft!',
        }
    }

    render(){
        return (
            <WelcomeDialog 
                title={this.state.title} 
                text={this.state.text}
            >
                <input onChange={(e)=>{this.setState({title:e.target.value})}} />
            </WelcomeDialog>
        )
    }
}

export default Dialog;
