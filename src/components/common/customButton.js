import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export const CustomButton = ({title, onPress, style}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.loginButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  loginTitle: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
