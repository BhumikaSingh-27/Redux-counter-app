// import * as actions from "../actions/actionType";

const initialState = 0;

const updateCounter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT": {
      return state + 1;
    }

    case "DECREMENT_COUNT": {
      return state === 0 ? 0 : state - 1;
    }

    default:
      return state;
  }
};

export default updateCounter;
