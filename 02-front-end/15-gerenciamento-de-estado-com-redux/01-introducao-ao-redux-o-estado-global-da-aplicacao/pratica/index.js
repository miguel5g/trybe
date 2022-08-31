const Redux = require('redux');

const { makeBreads } = require('./reducers/bakery-reducer');
const { reducer } = require('./reducers/index');

const store = Redux.createStore(reducer);

console.log(store.getState());

store.dispatch(makeBreads());

console.log(store.getState());
