import React, { createContext } from 'react';
import api from '../services/api';

interface AuthContextDate {
  signed: boolean;
  user: object;
  signIn(userData: object): Promise<void>;
}

const AuthContext = createContext<AuthContextDate>({} as AuthContextDate);

export const AuthProvider: React.FC = ({children}) => {
  async function signIn(userData: object) {
   const response = await api.post("/auth", userData);

   console.log(response.data);
  }

  return (
    <AuthContext.Provider value={{ signed: false , user: {}, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;