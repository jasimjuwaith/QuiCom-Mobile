import React from 'react';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { useAuth } from '../store/AuthContext';

const AppNavigator = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <MainNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
