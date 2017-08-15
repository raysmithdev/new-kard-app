import * as actions from '../actions';

const initialState = {
  loading: false,
  error: null,
  userLoaded: false,
  initialView: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

  case actions.SET_INITIAL_VIEW:
    return Object.assign({}, state, {
      userLoaded: true,
      initialView: action.initialView
    });
  default:
    return state;
  }
};

export default reducer;
