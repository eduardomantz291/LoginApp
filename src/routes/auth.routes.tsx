import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/Auth/sigIn';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="SingIn" component={SignIn} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}