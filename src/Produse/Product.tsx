import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
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
    <TouchableOpacity onPress={handleGoToProductPage} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: images[0]}} style={styles.image} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.price}>$ {price}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const {width} = Dimensions.get('window');
const itemWidth = (width - 20) / 2 - 10;

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productDetails: {
    padding: 10,
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
