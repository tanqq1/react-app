import React, { Component } from 'react';
import Pages1 from './contextPages';

const Context1 = React.createContext('red');
export default class ContextReact extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
            <Context1.Provider value='blue'>
                <Pages1 /> 
            </Context1.Provider>
        )
    }

}