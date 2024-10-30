/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import Product from './Products';
import Add from './Add';
import ProductSearch from './Product_Search';
import ProductDetail from './Product_Detail';

import {SafeAreaView} from 'react-native-safe-area-context';

import {
  BottomNavigation,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';

export default function App() {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'ProductList', title: 'Products', focusedIcon: 'folder'},
    {key: 'Product_Add', title: 'Add', focusedIcon: 'folder'},
    {key: 'ProductSearch', title: 'Search', focusedIcon: 'find'},
    {key: 'Product_Detail', title: 'ProductDetail', focusedIcon: 'calendar'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    ProductList: Product,
    Product_Add: Add,
    ProductSearch: ProductSearch,
    Product_Detail: ProductDetail,
  });

  return (
    <PaperProvider theme={MD3LightTheme}>
      <SafeAreaView style={{flex: 1}}>
        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}

// const App = () => {
//   const [data, setData] = useState();
//   const filePath = 'https://dummyjson.com/products';
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Product List</Text>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 40,
//     textAlign: 'center',
//     color: 'black',
//   },
//   container: {
//     marginLeft: 10,
//     marginRight: 10,
//   },
// });

// export default Product;
