import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useAuth } from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View>
        <ActivityIndicator size={50} color="#666" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes/> 
}