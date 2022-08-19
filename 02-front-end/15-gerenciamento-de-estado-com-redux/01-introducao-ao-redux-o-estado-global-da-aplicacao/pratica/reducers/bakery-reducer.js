const initialState = {
  breads: 0,
};

const ACTIONS = {
  MAKE_BREADS: 'MAKE_BREADS',
};

function makeBreads(count = 5) {
  return {
    type: ACTIONS.MAKE_BREADS,
    count,
  };
}

function bakeryReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.MAKE_BREADS:
      return {
        ...state,
        breads: state.breads + action.count,
      };

    default:
      return state;
  }
}

module.exports = {
  makeBreads,
  bakeryReducer,
};
