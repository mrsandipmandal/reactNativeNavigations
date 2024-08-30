import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from '../../config';

const Splash = ({ navigation }) => {

    useEffect(() => {
        checkLoginStatus()
    }, [])

    const checkLoginStatus = async () => {
        try {
            const res = await loginCheck();
            // console.log(res)
            setTimeout(() => {
                if (!res) {
                    navigation.replace('MainScreen');
                }else{
                    navigation.replace('Login')
                }
            }, 1000);
        } catch (error) {
            navigation.replace('Signup')
        }
    }

    const loginCheck = async () => {
        try {
            const userData = await AsyncStorage.getItem('@user_data');
            const userToken = await AsyncStorage.getItem('@user_token');

            if (userData !== null && userToken !== null) {
                const user = JSON.parse(userData);
                const username = user.username;
                const password = user.password;

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

                if (result.error === false) {
                    await AsyncStorage.setItem('@user_data', JSON.stringify(result.data));
                    await AsyncStorage.setItem('@user_token', result.token);
                    return false;
                }
            } else {
                return true;
            }
        } catch (error) {
            return true;
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Splash Screen</Text>
        </View>
    )
}

export default Splash