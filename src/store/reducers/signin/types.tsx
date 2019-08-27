import {SET_USERNAME, SET_PASSWORD} from './actions';

export interface AuthState {
  username: string;
  password: string;
}

interface SetUsername {
  type: typeof SET_USERNAME;
  username: string;
}

interface SetPassword {
  type: typeof SET_PASSWORD;
  password: string;
}

export type AuthActionTypes = SetUsername | SetPassword;
