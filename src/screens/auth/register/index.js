import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets';

export const RegisterPage = ({navigation}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      bounces={false}>
      <SafeAreaView style={styles.mainView}>
        <Image
          source={Images.logo}
          style={{height: 220, width: 200, alignSelf: 'center'}}
        />
        <Text style={styles.loginTitle}>Register</Text>
        <View style={styles.fieldView}>
          <Text style={styles.fieldTitle}>Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Name"
            onChangeText={text =>
              setUser(Object.assign({}, user, {...user, name: text}))
            }
          />
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
          <Text style={styles.fieldTitle}>Phone</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Phone"
            keyboardType="numeric"
            onChangeText={text =>
              setUser(Object.assign({}, user, {...user, phone: text}))
            }
          />
        </View>
        {/* <View style={styles.buttonView}> */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.replace('AuthStack')}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
        {/* </View> */}
        <View style={styles.alreadyAMemberView}>
          <Text style={styles.alreadyAMemberText}>Already a member?</Text>
          <TouchableOpacity
            style={styles.alreadyAMember}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.alreadyAMemberRegisterText}> Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
