import { combineReducers } from 'redux';

import kardReducer from './kardReducer';
import sceneReducer from './sceneReducer';

export default combineReducers({
  kard: kardReducer,
  scene: sceneReducer
});
