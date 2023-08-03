import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Product from './Product';
import {ProductProps} from '../types/Product';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/RootStackParamList';
import {RouteProp, useRoute} from '@react-navigation/native';

// type ProductPageRouteProp = RouteProp<RootStackParamList, 'ProductPage'>;

function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(res => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter(
        product => product.category === selectedCategory,
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  const handleShowAllProducts = () => {
    setSelectedCategory('');
  };

  // const handleShowDetails = (productId: number) => {
  //   navigation.navigate('ProductPage', {productId});
  // };

  return (
    <View style={styles.container}>
      {filteredProducts.map(product => (
        <Product
          handleShowDetails={function (): void {
            throw new Error('Function not implemented.');
          }}
          key={product.id}
          {...product}
          images={product.images || []} // handleShowDetails={() => handleShowDetails(product.id)}
        />
      ))}
      {!selectedCategory && (
        <TouchableOpacity
          style={styles.showAllButton}
          onPress={handleShowAllProducts}>
          <Text style={styles.showAllButtonText}>Toate produsele</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  showAllButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#99A3A4',
    borderRadius: 5,
  },
  showAllButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Products;
