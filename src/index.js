import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HooksExample from './pages/hooks/index';
import Dialog from './pages/others/propsChild';
import ContextReact from './pages/others/contextReact';
import RefsContainer from './pages/refs/refsContainer';

function Square(props){
      return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
      );
  }

  function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
      let winner = null;
      lines.forEach(item => {
        const [a,b,c] = item;
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            winner = squares[a];
        }
      })
      return winner;
  }
  
function Board(props){
    const renderSquare = (i) =>  {
        const { squares, handleClick } = props;
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    }
    return (
    <div>
        <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        </div>
        <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        </div>
        <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>
    </div>
    );
  }
  
  class Game extends React.Component {
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

    handleClick = (index) => { 
        const { XISNext, stepNumber } = this.state;
        const history = this.state.history.slice(0,stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if(calculateWinner(squares) || squares[index]){
            return;
        }
        squares[index] = XISNext ? 'X' : 'O';
        this.setState({
            history:history.concat([{squares:squares}]),
            XISNext: !XISNext,
            stepNumber:history.length,
            title:'this is a test',
        })
    }

    jumpTo = (step) => {
        this.setState({
            stepNumber: step,
            XISNext: step % 2 === 0,
            title:step,
        })
    }

    getInputValue(value){
        this.setState({
            hooksInputValue: this.delSpaceFormStr(value)
        });
    }

    delSpaceFormStr = (str) => {
        return str.replace(/\s*/g,"");
    }
    

    render() {
        const { history, XISNext, stepNumber, title } = this.state;
        const current = history[stepNumber];
        const winner = calculateWinner(current.squares);
        let status = '';
        if(winner){
            status = `The Winner is: ${winner}` ;
        }else {
            status = 'Next player: ' + (XISNext ? 'X' : 'O');
        }
        const moves = history.map((item,move) => {
            const desc = move ? 'Go To Move #' + move : 'Go To Game Start!';
            return <li key={move}>
                <button onClick={() =>this.jumpTo(move)}>{desc}</button>
            </li>
        })
        return (
            <div>
                <div className="game">
                    <div className="game-board">
                        <Board squares={current.squares} handleClick={(i) => this.handleClick(i)} title={title} />
                    </div>
                    <div className="game-info">
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
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
                <div className="title-div">
                    <span className="gradient-h1">5、高阶组件的生成、使用与理解</span>
                </div>
            </div>
        );
    }
  }
  
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  