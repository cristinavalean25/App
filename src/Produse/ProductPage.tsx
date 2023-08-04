import Navbar from '../components/Navbar';
import BottomNavbar from '../BottonNavbar';
import axios from 'axios';
import React, {ReactNode, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {HomeProps} from '../components/Home';
import Carousel from 'react-native-snap-carousel';
import {useShoppingCart} from '../ShoppingCart';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface Product {
  description: ReactNode;
  category: string;
  id: number;
  title: string;
  brand: string;
  price: number;
  images: string[];
  discountPercentage: number;
}

export type RootStackParamList = {
  ProductPage: {productId: number};
};

type ProductPageRouteProp = RouteProp<RootStackParamList, 'ProductPage'>;

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const route = useRoute<ProductPageRouteProp>();
  const {productId} = route.params;
  const navigation = useNavigation<HomeProps['navigation']>();
  const [images, setImages] = useState<string[]>([]);
  const {addProduct} = useShoppingCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`,
        );
        setProduct(response.data);
        setImages(response.data.images);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [productId]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  // const handleAddToFavorites = () => {
  //   if (product) {
  //     setProductId(product.id);
  //   }
  // };

  const renderItem = ({item}: {item: string}) => {
    return (
      <View>
        <Image source={{uri: item}} style={styles.imgStyle} />
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <Navbar navigation={navigation} />
          <View style={styles.firstContainer}>
            <Carousel
              data={images}
              renderItem={renderItem}
              sliderWidth={300}
              itemWidth={300}
              autoplay={true}
            />
            {product && (
              <View style={styles.details}>
                <Text style={styles.textH}>{product.title}</Text>
                <Text style={styles.textH}>{product.brand}</Text>
                <Text style={styles.textH}>$ {product.price}</Text>
                <Text style={styles.text}>{product.description}</Text>
                <Text style={styles.text}>{product.description}</Text>
                <Text style={styles.text}>{product.description}</Text>
              </View>
            )}

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => product && addProduct(product)}>
                <Text style={styles.textBtn}>Add to cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonAdd} onPress={handleGoBack}>
                <Text style={styles.textBtn}>Go back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <BottomNavbar />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    width: '100%',
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    marginTop: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonAdd: {
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    width: '40%',
    height: 40,
    marginLeft: 5,
    textAlign: 'center',
  },
  details: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 350,
    height: 350,
  },
  textH: {
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
    padding: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
  },
  textBtn: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 5,
  },
});

export default ProductPage;
