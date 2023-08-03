import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingCartProvider from './src/ShoppingCart';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Home from './src/components/Home';
import Navbar from './src/components/Navbar';
import Products from './src/Produse/Products';
import ProductPage from './src/Produse/ProductPage';
import Cart from './src/ShoppingCart/Cart';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ShoppingCartProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Navbar" component={Navbar} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Products"
            component={Products}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductPage"
            component={ProductPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </ShoppingCartProvider>
    </NavigationContainer>
  );
}

export default App;
