import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
  },
  loginTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 20,
  },
  fieldView: {
    paddingHorizontal: 20,
  },
  fieldTitle: {
    fontSize: 25,
    marginVertical: 5,
  },
  inputField: {
    paddingVertical: 5,
    fontSize: 20,
  },
  loginButton: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    margin: 20,
  },
  loginButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  notAMemberView: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  notAMember: {
    alignSelf: 'center',
  },
  notAMemberText: {
    fontSize: 15,
  },
  notAMemberRegisterText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
