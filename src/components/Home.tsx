/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import Navbar from './Navbar';
import Slider from './Slider';
//import Meniu from './Meniu';
import Products from '../Produse/Products';
import BottonNavbar from '../BottonNavbar';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/RootStackParamList';

export type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

function Home({navigation}: HomeProps) {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const backgroundStyle = {
    backgroundColor: '#E6F1FF',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Navbar navigation={navigation} />
          <Slider />
          {/* <Meniu /> */}
          <Products />
        </ScrollView>
        <BottonNavbar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F1FF',
  },
});

export default Home;
