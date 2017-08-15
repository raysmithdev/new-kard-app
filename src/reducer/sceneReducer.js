import { ActionConst } from 'react-native-router-flux';
import * as actions from '../actions';

const initialState = {
  scene: {},
  initialView: null,
  userLoaded: false,
};

const sceneReducer = (state = initialState, action) => {
  switch (action.type) {
  case ActionConst.FOCUS:
    return Object.assign({}, state, {
      scene: action.scene
    });

  case actions.SET_INITIAL_VIEW:
    return Object.assign({}, state, {
      userLoaded: true,
      initialView: action.initialView
    });

  default:
    return state;
  }
};

export default sceneReducer;
