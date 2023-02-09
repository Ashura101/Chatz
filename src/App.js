import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Root} from './navigators';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
