import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Bottom/Home';
import Settings from '../Bottom/Settings';
import BottomTab from '../Bottom/BottomTab';
import BSheet from '../Bottom/BSheet';

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
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../images/cart.png')}
                style={{ width: 24, height: 24, tintColor: color }}
              />
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => setVisible(true)} // Show modal on press
              />
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

      {/* Modal */}
      <Modal
        visible={isVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View backDropOpacity={.2} style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View
            style={{
              height: 300,
              backgroundColor: '#fff',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
            }}
          >
            <Text>Modal Content</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={{ color: 'blue', marginTop: 20 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
