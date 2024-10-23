/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import Product from './Products';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const [data, setData] = useState();
  const filePath = 'https://dummyjson.com/products';
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Product List</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
  },
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Product;
