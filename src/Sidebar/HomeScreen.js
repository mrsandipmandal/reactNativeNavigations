import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Bottom/Home';
import Settings from '../Bottom/Settings';
import BottomTab from '../Bottom/BottomTab';
import BottomSheet from '../Bottom/BottomSheet';

const Bottom = createBottomTabNavigator();

const HomeScreen = () => {
  const [isVisible, setVisible] = useState(false); // State for modal visibility

  return (
    <View style={{ flex: 1 }}>
      <Bottom.Navigator>

        <Bottom.Screen
          name="Home"
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
          name="New"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../images/heart.png')}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            ),
          }}
        />

        <Bottom.Screen
          name="Cart"
          component={BottomTab}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Image
                source={require('../images/cart.png')}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
              {...props}
              onPress={() => setVisible(true)} // Show modal on press
            >
            </TouchableOpacity>
            ),
          }}
        />

        <Bottom.Screen
          name="wallet"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../images/wallet.png')}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            ),
          }}
        />

        <Bottom.Screen
          name="Settings"
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

      {/* Pass isVisible and setVisible as props */}
      <BottomSheet isVisible={isVisible} setVisible={setVisible} />

    </View>
  );
};

export default HomeScreen;
