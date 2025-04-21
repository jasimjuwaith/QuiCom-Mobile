import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (email, password) => {
  try {
    const res = await api.post('/auth/login', { email, password });
    await AsyncStorage.setItem('token', res.data.token);
    return res.data;
  } catch (err) {
    console.error('Login failed', err);
    return null;
  }
};

export const signup = async (userData) => {
  try {
    const res = await api.post('/auth/signup', userData);
    return res.data;
  } catch (err) {
    console.error('Signup failed', err);
    return null;
  }
};

export const logout = async () => {
  await AsyncStorage.removeItem('token');
};

export const getToken = async () => {
  return await AsyncStorage.getItem('token');
};
