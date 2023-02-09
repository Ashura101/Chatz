import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets';

export const LoginPage = ({navigation}) => {
  const [user, setUser] = useState({email: '', password: ''});
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      bounces={false}>
      <SafeAreaView style={styles.mainView}>
        <Image
          source={Images.logo}
          style={{height: 220, width: 200, alignSelf: 'center'}}
        />
        <View style={{flex: 0.75}}>
          <Text style={styles.loginTitle}>Login</Text>
          <View style={styles.fieldView}>
            <Text style={styles.fieldTitle}>Email</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Email"
              onChangeText={text =>
                setUser(Object.assign({}, user, {...user, email: text}))
              }
            />
            <Text style={styles.fieldTitle}>Password</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Password"
              onChangeText={text =>
                setUser(Object.assign({}, user, {...user, password: text}))
              }
            />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.replace('HomeStack')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.notAMemberView}>
            <Text style={styles.notAMemberText}>Not a member?</Text>
            <TouchableOpacity
              style={styles.notAMember}
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.notAMemberRegisterText}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
