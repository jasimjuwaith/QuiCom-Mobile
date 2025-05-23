import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useCart } from '../store/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text>{product.name}</Text>
      <Text>₹{product.price}</Text>
      <Button
        title="Add to Cart"
        onPress={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 10, margin: 10, backgroundColor: '#fff', borderRadius: 8 },
  image: { width: '100%', height: 150, borderRadius: 8 },
});

export default ProductCard;
