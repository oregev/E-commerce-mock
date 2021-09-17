// Core
import { createContext, Dispatch, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
// Firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Config';
// Reducer
import { userReducer } from './reducer';
// Actions
import { setUser } from './actions';
// Types
import { UserState, UserAction } from './types';

const initialState: UserState = {
  data: null,
};

export const UserContext = createContext<{
  user: UserState;
  userDispatch: Dispatch<UserAction>;
}>({
  user: initialState,
  userDispatch: () => null,
});

export const UserProvider: React.FC = ({ children }) => {
  const [user, userDispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        userDispatch(setUser(authUser));
      } else {
        userDispatch(setUser(null));
      }
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        userDispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
