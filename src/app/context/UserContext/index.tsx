
import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

import { IUser } from '../../../entities/user/user.model';

interface IUserContextValues {
  user: IUser | null,
  isSignedIn: boolean,
}

interface IUserContextProviderValues {
  auth: IUserContextValues,
  setAuth: React.Dispatch<React.SetStateAction<IUserContextValues>>,
  signOut: () => void,
}

export const contextInitialValues: IUserContextValues = {
  user: null,
  isSignedIn: false,
};

const UserContext = createContext<IUserContextProviderValues>({} as IUserContextProviderValues);

UserContext.displayName = 'UserContext';

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState(contextInitialValues);
  const signOut = () => {
    setAuth(contextInitialValues);
  };
  return (
    <UserContext.Provider value={{ auth, setAuth, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export function useAuth(): IUserContextProviderValues {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a UserProvider');
  }
  return context;
}
