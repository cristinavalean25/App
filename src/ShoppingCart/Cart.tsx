import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useShoppingCart} from '../ShoppingCart';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/RootStackParamList';
import Navbar from '../components/Navbar';

type CartProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Cart'>;
};

function Cart({navigation}: CartProps) {
  const {cart, total, handleRemoveItem, updateTotal} = useShoppingCart();
  const [quantities, setQuantities] = useState<{[id: number]: number}>(
    cart.reduce((acc, item) => {
      acc[item.product.id] = item.qty;
      return acc;
    }, {} as {[id: number]: number}),
  );

  const handleQuantityChange = (productId: number, value: string) => {
    const intValue = parseInt(value);
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: isNaN(intValue) ? 0 : intValue,
    }));

    const newTotal = cart.reduce((acc, item) => {
      return (
        acc +
        item.product.price *
          (item.product.id === productId ? intValue : item.qty)
      );
    }, 0);

    updateTotal(newTotal);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Navbar
            navigation={
              navigation as StackNavigationProp<RootStackParamList, 'Home'>
            }
          />
          <View style={styles.cartContainer}>
            <Text style={styles.cartTitle}>Shopping Cart</Text>
            {cart.map(item => (
              <View key={item.product.id} style={styles.cartItem}>
                <Image
                  source={{uri: item.product.images[0]}}
                  style={styles.imageContainer}
                />
                <View style={styles.itemDetails}>
                  <Text style={styles.textDetails}>{item.product.title}</Text>
                  <View style={styles.quantityContainer}>
                    <Text style={styles.textDetails}>Quantity:</Text>
                    <TextInput
                      style={styles.quantityInput}
                      value={quantities[item.product.id].toString()}
                      onChangeText={value =>
                        handleQuantityChange(item.product.id, value)
                      }
                    />
                  </View>
                  <Text style={styles.textDetails}>
                    Price: $ {item.product.price * quantities[item.product.id]}
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleRemoveItem(item.product.id)}>
                    <Text style={styles.removeButton}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <View>
              <Text style={styles.totalCart}>Total cart: $ {total}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F1FF',
  },
  cartContainer: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  cartTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
    padding: 10,
    textAlign: 'center',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  textDetails: {
    fontSize: 18,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityInput: {
    width: 50,
    height: 30,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  removeButton: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  totalCart: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
});

export default Cart;
