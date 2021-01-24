import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface AuthContextDate {
  signed: boolean;
  user: object | null;
  signIn(userData: object): Promise<void>;
  signOut(): void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextDate>({} as AuthContextDate);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@LAauth:user');
      const storagerToken = await AsyncStorage.getItem('@LAauth:token');   

      if (storageUser && storagerToken) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    }

    loadStorageData();
  }, [])

  async function signIn(userData: object) {
    const response = await api.post("/auth", userData);
    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    
    await AsyncStorage.setItem('@LAauth:user', JSON.stringify(response.data.user));
    await AsyncStorage.setItem('@LAauth:token', response.data.token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user , user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;