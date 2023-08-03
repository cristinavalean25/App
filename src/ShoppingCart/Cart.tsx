import React from 'react';
import Navbar from '../components/Navbar';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useShoppingCart} from '../ShoppingCart';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/RootStackParamList';

type CartProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Cart'>;
};

function Cart({navigation}: CartProps) {
  const {cart, total, handleRemoveItem} = useShoppingCart();

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Navbar
            navigation={
              navigation as StackNavigationProp<RootStackParamList, 'Home'>
            }
          />
          <View style={styles.cartContainer}>
            <Text style={styles.cartTitle}>Shopping Cart</Text>
            {cart.map(item => (
              <View key={item.product.id}>
                <Image
                  source={{uri: item.product.images[0]}}
                  style={styles.imageContainer}
                />
                <Text style={styles.textDetails}>{item.product.title}</Text>
                <Text style={styles.textDetails}>Quantity: {item.qty}</Text>
                <Text style={styles.textDetails}>
                  Price: $ {item.product.price * item.qty}
                </Text>
                <TouchableOpacity
                  onPress={() => handleRemoveItem(item.product.id)}>
                  <Text style={styles.removeButton}>Remove</Text>
                </TouchableOpacity>
              </View>
            ))}
            <View>
              <Text>Total cart: $ {total}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  imageContainer: {
    width: 300,
    height: 300,
    marginVertical: 10,
  },
  cartTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
    padding: 10,
  },
  textDetails: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
  removeButton: {
    width: 200,
    height: 30,
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    backgroundColor: 'red',
  },
});

export default Cart;
