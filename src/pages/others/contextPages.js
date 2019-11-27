import React, { Component } from 'react';
import {ThemeContext} from './themeContext';

export default class Pages1 extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <ThemeContext.Consumer>
                {(context)=>{
                    return (
                        <h2 style={{backgroundColor:context.backgroundColor,color:context.color}}>
                            this is a little success,{context.backgroundColor}
                        </h2>
                      )
                }}
            </ThemeContext.Consumer>
        )
    }
}

