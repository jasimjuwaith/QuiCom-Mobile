import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchUserOrders } from '../services/order';

const OrdersScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const data = await fetchUserOrders();
      setOrders(data);
    };
    loadOrders();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}>
      <Text style={{ fontWeight: 'bold' }}>Order ID: {item.id}</Text>
      <Text>Total Price: ₹{item.totalPrice}</Text>
      <Text>Items:</Text>
      {item.items.map((i, idx) => (
        <Text key={idx}>- {i.productName} × {i.quantity}</Text>
      ))}
    </View>
  );

  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 20 }}
    />
  );
};

export default OrdersScreen;
