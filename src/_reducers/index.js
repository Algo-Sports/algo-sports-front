import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { signup } from './signup.reducer';
import { alert } from './alert.reducer';
import { modal } from './modal.reducer';

const rootReducer = combineReducers({
  authentication,
  signup,
  alert,
  modal
});

export default rootReducer;