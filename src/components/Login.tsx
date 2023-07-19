/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Navbar from './Navbar';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/RootStackParamList';

type LoginProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

function Login({navigation}: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Navbar
        navigation={
          navigation as StackNavigationProp<RootStackParamList, 'Home'>
        }
      />
      <View style={styles.bigContainer}>
        <Text style={styles.login}>Welcome back</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setUsername(text)}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Password"
        />
        <View style={styles.containerButton}>
          <Text style={styles.buttonLogin}>LOGIN</Text>
        </View>
        <Text>Forgot password ?</Text>
        <View style={styles.line}>
          <Text style={styles.account}>No account ?</Text>
          <Text style={styles.register}>Regiter</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bigContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 1,
    width: 410,
    height: 'auto',
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 5,
    marginTop: 50,
    shadowRadius: 30,
  },
  containerButton: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogin: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    paddingTop: 3,
    backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
    borderRadius: 5,
  },
  login: {
    fontSize: 30,
    fontWeight: '600',
    color: 'blue',
  },
  input: {
    height: 40,
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  line: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderTopWidth: 1,
    borderTopColor: '#DCDCDC',
    marginTop: 10,
    marginBottom: 10,
  },
  account: {
    marginTop: 10,
    fontSize: 12,
  },
  register: {
    width: '50%',
    height: 35,
    marginVertical: 10,
    paddingTop: 3,
    backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    borderRadius: 5,
  },
});

export default Login;
