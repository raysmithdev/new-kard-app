import { ActionConst } from 'react-native-router-flux';
import * as actions from '../actions';

const initialState = {
  launchLoading: false,
  launchError: null,
  scene: {},
  // initialView: null,
  userLoaded: false,
};

const sceneReducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionConst.FOCUS:
    return Object.assign({}, state, {
      scene: action.scene
    });

  case actions.FETCH_INITIAL_VIEW:
    return Object.assign({}, state, {
      launchLoading: true
    });

  case actions.INITIAL_VIEW_SUCCESS:
    return Object.assign({}, state, {
      launchLoading: false,
      userLoaded: true,
      // initialView: action.initialView
    });

  case actions.INITIAL_VIEW_FAILURE:
    return Object.assign({}, state, {
      launchLoading: false,
      launchError: action.error
    });

  default:
    return state;
  }
};

export default sceneReducer;
