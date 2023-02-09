import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage, RegisterPage} from '../../screens';

const StackAuth = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <StackAuth.Navigator>
      <StackAuth.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <StackAuth.Screen
        name="Register"
        component={RegisterPage}
        options={{headerShown: false}}
      />
    </StackAuth.Navigator>
  );
};
