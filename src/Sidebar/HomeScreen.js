import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Bottom/Home';
import Settings from '../Bottom/Settings';
import BottomTab from '../Bottom/BottomTab';

const Bottom = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../images/home.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />

      <Bottom.Screen
        name='Menu'
        component={BottomTab}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../images/BorderAllRounded.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      
      <Bottom.Screen
        name='Settings'
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../images/settings.png')}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />

    </Bottom.Navigator>

  )
}

export default HomeScreen