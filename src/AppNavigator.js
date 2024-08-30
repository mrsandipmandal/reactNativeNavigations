import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './Screens/Splash';
import MainScreen from './Screens/MainScreen';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Profile from './Screens/Profile';

const stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>

      <stack.Navigator>

        <stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name='Signup'
          component={Signup}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name='Splash'
          component={Splash}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name='MainScreen'
          component={MainScreen}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name='Profile'
          component={Profile}
          options={{ headerShown: false }}
        />
      </stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigator