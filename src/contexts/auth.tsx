import React, { createContext, useState } from 'react';
import api from '../services/api';

interface AuthContextDate {
  signed: boolean;
  user: object | null;
  signIn(userData: object): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextDate>({} as AuthContextDate);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn(userData: object) {
    const response = await api.post("/auth", userData);
    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  }

  async function signOut() {
    setUser(null); 
  }

  return (
    <AuthContext.Provider value={{ signed: !!user , user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;