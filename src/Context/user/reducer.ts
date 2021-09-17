// types
import { UserState, UserActionTypes, UserAction } from './types';

export const userReducer = (state: UserState, action: UserAction): UserState => {
  const { type, payload } = action;

  switch (type) {
    case UserActionTypes.setUser: {
      return {
        ...state,
        data: payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
