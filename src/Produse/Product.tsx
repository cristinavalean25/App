import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface ProductComponentProps {
  id: number;
  title: string;
  images: string[];
  category: string;
  price: number;
}

const Product: React.FC<ProductComponentProps> = ({
  id,
  title,
  images,
  price,
}) => {
  const navigation = useNavigation<any>();

  const handleGoToProductPage = () => {
    navigation.navigate('ProductPage', {productId: id});
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: images[0]}} style={styles.image} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>$ {price}</Text>
        <TouchableOpacity
          onPress={handleGoToProductPage}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>More details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productDetails: {
    flex: 2,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4169E1',
    borderRadius: 5,
    padding: 7,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Product;
