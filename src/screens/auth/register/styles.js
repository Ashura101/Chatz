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
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  registerButton: {
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
  alreadyAMemberView: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  alreadyAMember: {
    alignSelf: 'center',
  },
  alreadyAMemberText: {
    fontSize: 15,
  },
  alreadyAMemberRegisterText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
