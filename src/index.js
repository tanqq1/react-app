import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HooksExample from './pages/hooks/index';
import Dialog from './pages/others/propsChild';
import ContextReact from './pages/others/contextReact';
import RefsContainer from './pages/refs/refsContainer';
import Game from './pages/game/index';

  
  class ReactIndex extends React.Component {
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

    render() {
        return (
            <div>hhhhh</div>
        )
        return (
            <div>
                <div className="title-div">
                    <span className="gradient-h1">0、三子棋盘</span>
                </div>
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
        );
    }
  }
  
  
  ReactDOM.render(
    <ReactIndex />,
    document.getElementById('root')
  );
  

// function hello(){
//     console.log("hello");
// }
// hello();