/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView, useColorScheme} from 'react-native';
import Navbar from './Navbar';
import Slider from './Slider';
import Meniu from './Meniu';
import Products from '../Produse/Products';
import BottonNavbar from '../BottonNavbar';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/RootStackParamList';

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

function Home({navigation}: HomeProps) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Navbar navigation={navigation} />
        <Slider />
        <Meniu />
        <Products />
      </ScrollView>
      <BottonNavbar />
    </SafeAreaView>
  );
}

export default Home;
