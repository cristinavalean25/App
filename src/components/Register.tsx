import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../types/RootStackParamList';
import Navbar from './Navbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

type RegisterProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
};

function Register({navigation}: RegisterProps) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterClick = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <SafeAreaView>
        <Navbar
          navigation={
            navigation as StackNavigationProp<RootStackParamList, 'Home'>
          }
        />
        <View style={styles.leftContainer}>
          <Text style={styles.register}>Register</Text>
          <Text style={styles.lets}>Lets get you on board</Text>
        </View>
        <View style={styles.bigContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={name}
            onChangeText={setName}
          />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity>
            <Text style={styles.btnRegister}>Register</Text>
          </TouchableOpacity>
          <View style={styles.or}>
            <View style={styles.orLeft}></View>
            <Text style={styles.text}>or</Text>
            <View style={styles.orRight}></View>
          </View>
          <View style={styles.socialMediaButtons}>
            <TouchableOpacity style={styles.socialButtonRegister}>
              <Icon
                name="google"
                size={20}
                color="#f5af19"
                style={styles.socialIcon}
              />
              <Text>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButtonRegister}>
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
            <Text>Alredy have an account? </Text>
            <TouchableOpacity onPress={handleRegisterClick}>
              <Text style={styles.loginText}>Sign in </Text>
            </TouchableOpacity>
          </View>
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
  register: {
    fontSize: 30,
    color: '#000',
    fontWeight: '700',
    paddingBottom: 10,
  },
  lets: {
    fontSize: 15,
    width: 100,
    color: '#000',
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

  btnRegister: {
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
    flexDirection: 'row',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  socialButtonRegister: {
    width: '45%',
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
  loginText: {
    color: 'blue',
  },
});

export default Register;
