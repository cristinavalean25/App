import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Product from './Product';
import {ProductProps} from '../types/Product';

function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

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

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const uniqueCategories = Array.from(new Set(products.map(p => p.category)));

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, !selectedCategory && styles.selectedButton]}
          onPress={handleShowAllProducts}>
          <Text style={styles.buttonText}>Toate produsele</Text>
        </TouchableOpacity>
        {uniqueCategories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.button,
              selectedCategory === category && styles.selectedButton,
            ]}
            onPress={() => handleCategoryFilter(category)}>
            <Text style={styles.buttonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.containerProducts}>
        {filteredProducts.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 8,
    margin: 5,
    elevation: 3,
    backgroundColor: '#fff',
  },
  selectedButton: {
    backgroundColor: '#1E90FF',
  },
  buttonText: {
    fontSize: 16,
  },
  containerProducts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Products;
