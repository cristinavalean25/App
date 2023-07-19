/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/RootStackParamList';

type NavbarProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

function Navbar({navigation}: NavbarProps) {
  const handleHomeClick = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.navContainer}>
      <View style={styles.leftContainer}>
        <Icon name="wb-sunny" size={20} />
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={handleHomeClick}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navText}>Login</Text>
        </TouchableOpacity>
        <Icon name="shopping-cart" size={30} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    width: '100%',
    height: 50,
    display: 'flex',
    alighItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#EF8210',
  },
  leftContainer: {
    margin: 10,
    display: 'flex',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  navText: {
    marginRight: 10,
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Navbar;
