import React from 'react';
import './index.css';
import HooksExample from './pages/hooks/index';
import Dialog from './pages/others/propsChild';
import ContextReact from './pages/others/contextReact';
import RefsContainer from './pages/refs/refsContainer';
import Game from './pages/game/index';

  
  export default class ReactIndex extends React.Component {
    constructor(props){
        super(props);
        this.state={
            history:[
                {squares:new Array(9).fill(null)}
            ],
            stepNumber:0,
            XISNext: true,
            hooksInputValue:''
        }
        this.getInputValue = this.getInputValue.bind(this);
        this.funsRef = React.createRef();
    }

    getInputValue(value){
        this.setState({
            hooksInputValue: value
        });
    }

    getProxy = () => {
        const alice =  {
            birthday: '2002-01-01',
            age: 20,
            height: 180,
            weight: 65,
            sex: 'man'
        }

        const calculateAge = birthday => {
            return '18';
        }
        const handler = {
            get (target, key) {
                if(key === 'age'){
                    return calculateAge(new Date(target.birthday))
                }
                return target(key)
            },
            set (target, key, value) {
                if(key === 'birthday'){
                    throw new Error('Birthday is readonly')
                }
                return true;
            },
            deleteProperty (target, key) {
                if(key in target){
                    return false;
                }
                return delete target[key]
            }
        }
        const proxy = new Proxy(alice, handler);
        console.log("000000000",proxy)
        proxy.age = 23;
        delete proxy.weight;
        console.log("111111111",proxy,proxy.age)
    }

    render() {
        return (
            <div>
                <div className="title-div">
                    <span className="gradient-h1">0、三子棋盘</span>
                </div>
                <button onClick={this.getProxy}>掉一下</button>
                <Game />
                <div className="title-div">
                    <span className="gradient-h1">1、hooks的使用</span>
                </div>
                <p className="gradient-mask" text={this.state.hooksInputValue}>{this.state.hooksInputValue}</p>
                <HooksExample 
                    title="输入信息：" 
                    getInputValue={this.getInputValue} 
                />
                <div className="title-div">
                    <span className="gradient-h1">2、组合和继承</span>
                </div>
                <Dialog ref={el => this.dialogs = el} />
                <div className="title-div">
                    <span className="gradient-h1">3、Context的使用</span>
                </div>
                <ContextReact />
                <div className="title-div">
                    <span className="gradient-h1">4、refs的使用</span>
                </div>
                <RefsContainer name={this.state.hooksInputValue}></RefsContainer>
            </div>
        )
    }
  }
  
