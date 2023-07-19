/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomNavbar: React.FC = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.icon}>
        <Icon name="star" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Icon name="heart" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon}>
        <Icon name="bell" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
});

export default BottomNavbar;
