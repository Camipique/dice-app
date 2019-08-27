import {AuthState, AuthActionTypes} from './types';
import {SET_USERNAME, SET_PASSWORD} from './actions';

const initialState: AuthState = {
  username: '',
  password: '',
};

const signin = (state: AuthState = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case SET_USERNAME:
      return {...state, username: action.username};
    case SET_PASSWORD:
      return {...state, password: action.password};
    default:
      return state;
  }
};


export default signin