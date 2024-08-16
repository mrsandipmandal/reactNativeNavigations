// Logout.js
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem('@user_data');
    await AsyncStorage.removeItem('@user_token');
    Alert.alert('Success', 'You have been logged out successfully');
  } catch (error) {
    Alert.alert('Error', 'There was an error logging out. Please try again.');
  }
};

export const logout = async (navigation) => {
  try {
    await removeUserData();
    navigation.replace('Login');
  } catch (error) {
    console.error('Error logging out:', error);
  }
};