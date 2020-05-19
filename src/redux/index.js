import { createStore, combineReducers  } from 'redux';

function Counter(state = 0, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

function timer(state = 0, action){
    switch(action.type){
        case 'TIMER_ADD':
            return state + 10;
        case 'TIMER_DECOUNT':
            return state - 10;
        default: 
        return state;
    }
}

let store = createStore(counter)

store.subscribe(() => {console.log(store.getState())})

const reactRedux1 = combineReducers({
    Counter,
    timer
})

export default reactRedux1;