/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

function Meniu() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://fakestoreapi.com/products')
        .then(res => {
          const data: Product[] = res.data;
          setProducts(data);
          setFilteredProducts(data);
        })
        .catch(err => console.log(err));
    };
    fetchData();
  }, []);

  const filterProducts = (category: string) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const updatedList = products.filter(
        product => product.category === category,
      );
      setFilteredProducts(updatedList);
    }
  };

  const navigateToProduct = (productId: number) => {
    navigation.navigate('Product', {productId});
  };

  return (
    <>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => filterProducts('All')}>
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => filterProducts("men's clothing")}>
          <Text style={styles.buttonText}>Men's Clothing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => filterProducts("women's clothing")}>
          <Text style={styles.buttonText}>Women's Clothing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => filterProducts('jewelry')}>
          <Text style={styles.buttonText}>Jewelry</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => filterProducts('electronics')}>
          <Text style={styles.buttonText}>Electronics</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerProducts}>
        {filteredProducts.map(product => (
          <TouchableOpacity
            key={product.id}
            style={styles.card}
            onPress={() => navigateToProduct(product.id)}>
            <Image source={{uri: product.image}} style={styles.image} />
            <View style={styles.cardDescription}>
              <Text>{product.title}</Text>
              <Text style={styles.price}>${product.price}</Text>
              <Text>{product.category}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 8,
    margin: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  containerProducts: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  card: {
    marginVertical: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cardDescription: {
    flex: 1,
  },
  price: {
    fontWeight: 'bold',
  },
});

export default Meniu;
