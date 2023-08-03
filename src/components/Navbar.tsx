import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/RootStackParamList';
import {useShoppingCart} from '../ShoppingCart';

type NavbarProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

function Navbar({navigation}: NavbarProps) {
  const {cart, total} = useShoppingCart();
  console.log('Cart:', cart);
  console.log('Total:', total);

  const handleHomeClick = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.navContainer}>
      <View style={styles.leftContainer}>
        <Image source={require('../image/png.png')} style={styles.image} />
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={handleHomeClick}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.cart}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-cart" size={25} color="#000" />
            <Text style={styles.cartCount}>{cart.length}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#EF8210',
  },
  image: {
    width: 100,
    height: 50,
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
  cart: {
    width: 50,
    height: 'auto',
  },
  cartCount: {
    position: 'absolute',
    right: 10,
    color: '#000',
    padding: 5,
    fontSize: 15,
  },
});

export default Navbar;
