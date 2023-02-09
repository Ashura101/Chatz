import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {CustomButton} from '../../../components/common/customButton';

export const HomePage = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <CustomButton
        title={'Go to chat'}
        onPress={() => navigation.navigate('Chat')}
      />
    </SafeAreaView>
  );
};
