/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Navbar from './Navbar';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/RootStackParamList';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

type LoginProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

function Login({navigation}: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterClick = () => {
    navigation.navigate('Register');
  };

  const handleGoogleLogin = () => {
    const googleUrl = 'https://accounts.google.com/';
    Linking.openURL(googleUrl);
  };

  const handleFacebookLogin = () => {
    const facebookUrl = 'https://www.facebook.com/';
    Linking.openURL(facebookUrl);
  };

  return (
    <>
      <Navbar
        navigation={
          navigation as StackNavigationProp<RootStackParamList, 'Home'>
        }
      />
      <SafeAreaView>
        <View style={styles.leftContainer}>
          <Text style={styles.login}>Login</Text>
          <Text style={styles.lets}>
            Welcome back, please login to your account
          </Text>
        </View>
        <View style={styles.bigContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.forget}>Forget Password?</Text>
          <TouchableOpacity>
            <Text style={styles.btnLogin}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.or}>
          <View style={styles.orLeft}></View>
          <Text style={styles.text}>or</Text>
          <View style={styles.orRight}></View>
        </View>
        <View style={styles.socialMediaButtons}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleGoogleLogin}>
            <Icon
              name="google"
              size={20}
              color="#f5af19"
              style={styles.socialIcon}
            />
            <Text>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleFacebookLogin}>
            <Icon
              name="facebook-square"
              size={20}
              style={styles.socialIcon}
              color="blue"
            />
            <Text>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialMediaButtons}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={handleRegisterClick}>
            <Text style={styles.registerText}>Regiter</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  leftContainer: {
    width: '100%',
    height: 'auto',
    marginLeft: 50,
    marginTop: 50,
  },
  login: {
    fontSize: 30,
    color: '#000',
    fontWeight: '700',
    paddingBottom: 10,
  },
  lets: {
    fontSize: 17,
    width: 150,
    color: 'grey',
    padding: 5,
  },
  bigContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  input: {
    width: '80%',
    height: 40,
    borderTopColor: 'transparent',
    borderColor: 'grey',
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    marginBottom: 16,
  },

  btnLogin: {
    width: 300,
    height: 45,
    backgroundColor: 'blue',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 23,
    color: '#fff',
    fontWeight: '600',
    marginTop: 20,
    paddingTop: 7,
  },
  forget: {
    textAlign: 'right',
    color: 'blue',
  },
  or: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  orLeft: {
    borderWidth: 1,
    width: '30%',
    marginLeft: 40,
    borderColor: 'grey',
  },
  text: {
    textAlign: 'center',
    position: 'absolute',
    left: '47%',
    top: -10,
    paddingHorizontal: 5,
  },
  orRight: {
    borderWidth: 1,
    width: '30%',
    marginRight: 40,
    borderColor: 'grey',
  },
  socialMediaButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
  },
  socialButton: {
    width: '40%',
    height: 45,
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 5,
  },
  socialIcon: {
    marginRight: 10,
  },
  registerText: {
    color: 'blue',
  },
});

export default Login;
