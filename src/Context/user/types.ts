// Firebase
import { UserInfo } from 'firebase/auth';

export enum UserActionTypes {
  setUser = 'SET_USER',
}

export type UserAction = {
  type: UserActionTypes;
  payload: UserInfo | null;
};

export type UserState = {
  data: UserInfo | null;
};
