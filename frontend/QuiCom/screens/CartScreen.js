import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useCart } from '../store/CartContext';

import { placeOrder } from '../services/order';
import { useNavigation } from '@react-navigation/native';

const handleCheckout = async () => {
  const res = await placeOrder(cartItems, total);
  if (res) {
    alert('Order placed successfully!');
    clearCart();
    navigation.navigate('Home'); // or navigate to Orders
  } else {
    alert('Failed to place order.');
  }
};

// Inside JSX
<Button title="Checkout" onPress={handleCheckout} />


const CartScreen = () => {
  const { cartItems, dispatch } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 5 }}>
            <Text>{item.name} x{item.quantity}</Text>
            <Text>₹{item.price * item.quantity}</Text>
            <Button title="Remove" onPress={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })} />
          </View>
        )}
      />
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10 }}>Total: ₹{total}</Text>
      <Button title="Checkout" onPress={() => console.log('Proceed to payment')} />
    </View>
  );
};

export default CartScreen;
