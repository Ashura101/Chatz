import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStack, HomeStack} from '../../navigators';

const StackApp = createNativeStackNavigator();

export const Root = () => {
  return (
    <StackApp.Navigator>
      <StackApp.Screen
        name="AuthStack"
        component={AuthStack}
        options={{headerShown: false}}
      />
      <StackApp.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
    </StackApp.Navigator>
  );
};
