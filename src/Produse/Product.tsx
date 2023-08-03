/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface ProductComponentProps {
  id: number;
  title: string;
  images: string[];
  category: string;
  price: number;
  handleShowDetails: () => void;
}

const Product: React.FC<ProductComponentProps> = ({
  id,
  title,
  images,
  category,
  price,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigation = useNavigation<any>();

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleGoToProductPage = () => {
    navigation.navigate('ProductPage', {productId: id});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleDetails}>
        <Image source={{uri: images[0]}} style={styles.imageContainer} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      {showDetails && (
        <View>
          <Text style={styles.title}>{category}</Text>
          <Text style={styles.title}>$ {price}</Text>
          <TouchableOpacity
            onPress={handleGoToProductPage}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>More details</Text>
          </TouchableOpacity>
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
