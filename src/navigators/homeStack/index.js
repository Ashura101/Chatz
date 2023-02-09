import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage, ChatPage} from '../../screens';

const StackHome = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name="Home"
        component={HomePage}
        // options={{headerShown: false}}
      />
      <StackHome.Screen
        name="Chat"
        component={ChatPage}
        // options={{headerShown: false}}
      />
    </StackHome.Navigator>
  );
};
