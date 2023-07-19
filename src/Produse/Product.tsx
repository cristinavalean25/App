/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

interface ProductComponentProps {
  id: number;
  title: string;
  images: string[];
  category: string;
  price: number;
}

const Product: React.FC<ProductComponentProps> = ({
  title,
  images,
  category,
  price,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleShowDetails}>
        <Image source={{uri: images[0]}} style={styles.imageContainer} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      {showDetails && (
        <View>
          <Text style={styles.title}>{category}</Text>
          <Text style={styles.title}>$ {price}</Text>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
  },
  imageContainer: {
    width: 200,
    height: 200,
    margin: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  buttonText: {
    width: 100,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    margin: 3,
    fontSize: 17,
    color: '#fff',
  },
});

export default Product;
