import React, {useState, useEffect} from 'react';
import {Image, FlatList, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Button} from 'react-native-paper';
const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export default function Product() {
  const [data, setData] = useState();
  const filePath = 'https://dummyjson.com/products';
  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response is not OK`);
        }
        return response.json();
      })
      .then(d => {
        setData(d.products);
      })
      .catch(error => {
        console.error('Error fetching', error);
      });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.mainProduct}>
            <View style={styles.left}>
              <Image
                source={{uri: item.thumbnail}}
                style={{width: 150, height: 150, marginBottom: 10}}
              />
            </View>

            <View style={styles.right}>
              <Text>Title: {item.title}</Text>
              <Text>Description: {item.description}</Text>
              <Text style={styles.textPrice}>Price: {item.price}</Text>
              <Text>Category: {item.category}</Text>
              <Text>Stock: {item.stock}</Text>

              <View>
                <Button>detail</Button>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
  },
  textPrice: {
    color: 'red',
  },
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  mainProduct: {
    height: 270,
    width: 380,
    flexDirection: 'row',
    backgroundColor: 'gray',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  left: {
    width: 170,
  },
  right: {
    width: 180,
  },
  button1: {
    height: 30,
    width: 10,
    marginTop: 10,
  },
});
