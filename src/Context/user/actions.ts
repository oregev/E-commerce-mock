// Firebase
import { UserInfo } from 'firebase/auth';
// Types
import { UserActionTypes, UserAction } from './types';

export const setUser = (payload: UserInfo | null): UserAction => ({
  type: UserActionTypes.setUser,
  payload,
});
