const { combineReducers } = require('redux');

const { bakeryReducer } = require('./bakery-reducer');

module.exports = {
  reducer: combineReducers({
    bakery: bakeryReducer,
  }),
};
