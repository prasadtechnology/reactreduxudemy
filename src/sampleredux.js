const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter : 1
}

//Reducer
const rootReducer = (state=initialState,action) => {
    if(action.type === 'ADD_NUMBER'){
        return {
            ...state,
            counter : state.counter + action.value
        }
    }
    return state;
}

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscribing
store.subscribe( () => {
    console.log(" subscribed  ", store.getState());
});

//Dispatching Action
store.dispatch({type: 'ADD_NUMBER', value : 10});
store.dispatch({type: 'ADD_NUMBER', value : 5});
console.log(store.getState());

