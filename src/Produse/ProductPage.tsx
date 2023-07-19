/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

export type RootStackParamList = {
  ProductPage: {productId: number};
};

type ProductPageRouteProp = RouteProp<RootStackParamList, 'ProductPage'>;

function ProductPage() {
  const [product, setProduct] = useState<any | null>(null);
  const route = useRoute<ProductPageRouteProp>();

  useEffect(() => {
    const {productId} = route.params;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`,
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [route.params]);

  return (
    <View style={styles.firstContainer}>
      {product && (
        <View>
          <Text>{product.brand}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  firstContainer: {
    width: '100%',
    height: 'auto',
    margin: 20,
    overflow: 'hidden',
  },
});

export default ProductPage;
