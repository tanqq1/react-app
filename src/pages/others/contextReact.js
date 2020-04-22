/**
 * React的Context可以理解成js中的作用域
 * 生成Context组件:const ContextComponent= React.createContext(defaultValue)
 * Context订阅者：<ContextComponent.Provider value>,可嵌套使用
 * Context消费者:<ContextComponent.Consumer>
 */

import React, { Component } from 'react';
import Pages1 from './contextPages';
import {ThemeContext} from './themeContext';

export default class ContextReact extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
            <ThemeContext.Provider value={{backgroundColor:'pink',color:'green'}}>
                <Pages1 />
                <ThemeContext.Provider value={{color:'red',fontSize:20,fontWeight:600}}>
                    <Page2 />
                </ThemeContext.Provider>
            </ThemeContext.Provider>
        )
    }

}

function Page2(props){
    return(
        <Pages3 />
    )
}

class Pages3 extends Component{
    static contextType = ThemeContext;
    render(){
        return (
            <div>
                <div style={{...this.context}}>
                    {this.context.color}
                </div>
                React-Router之BrowerRouter 与 HashRouter,他们都是通过HTML5的history来创建的
                {`_this.history = history.createBrowserHistory(_this.props)`}
                {`_this.history = history.createHashHistory(_this.props);`}
            </div>
        )
    }
}