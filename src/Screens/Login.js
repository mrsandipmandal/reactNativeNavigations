import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, } from 'react-native';
import styles from './_styles';
import { BASE_URL } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Username amd Password fields are required');
      return false;
    }
    return true;
  };

  const handleInputChange = (field, value) => {
    let newErrors = { ...errors };

    switch (field) {
      case 'username':
        if (!value) newErrors[field] = 'Username is required';
        else delete newErrors[field];
        setUsername(value);
        break;
      case 'password':
        if (value.length < 3) newErrors.password = 'Password must be at least 3 characters long';
        else delete newErrors.password;
        setPassword(value);
        break;
    }

    setErrors(newErrors);
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const result = await response.json();

      if (!result.error) {
        await AsyncStorage.setItem('@user_data', JSON.stringify(result.user));
        await AsyncStorage.setItem('@user_token', result.token);
        // Clear input fields
        setUsername('');
        setPassword('');
        navigation.replace('Splash')
      } else {
        Alert.alert('Error', result.message || 'An error occurred during Login');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://www.bootdey.com/image/280x280/20B2AA/20B2AA' }}
          style={styles.background}
        />
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar7.png' }}
            style={styles.logo}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.card}>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={(value) => handleInputChange('username', value)}
                placeholder="Username"
                placeholderTextColor="#999"
              />
              {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={(value) => handleInputChange('password', value)}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
              />
              {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.linkText}>
              Dont't have an account?{' '}
              <Text onPress={() => navigation.navigate('Signup')}>Signup</Text>
            </Text>

          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
