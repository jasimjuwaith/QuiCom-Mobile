import api from './api';
import { getToken } from './auth';

export const placeOrder = async (cartItems, totalPrice) => {
  const token = await getToken();
  try {
    const res = await api.post(
      '/orders',
      {
        items: cartItems.map(item => ({
          productId: item.id,
          quantity: item.quantity,
        })),
        totalPrice
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return res.data;
  } catch (err) {
    console.error('Order failed', err);
    return null;
  }
};

export const fetchUserOrders = async () => {
  const token = await getToken();
  try {
    const res = await api.get('/orders/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch (err) {
    console.error('Fetch orders failed', err);
    return [];
  }
};
