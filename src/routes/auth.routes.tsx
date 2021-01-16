import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/Auth/sigIn';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <AuthStack.Screen name="SingIn" component={SignIn} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}