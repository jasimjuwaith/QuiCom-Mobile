import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../services/products';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;
