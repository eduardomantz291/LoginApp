import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/Auth/signIn';
import SignUp from '../pages/Auth/signUp';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}