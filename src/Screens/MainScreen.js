import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabRouter } from '@react-navigation/native';

import HomeScreen from '../Sidebar/HomeScreen';
import Sidebar from '../Sidebar';

const Drawer = createDrawerNavigator();
const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  )
}

export default MainScreen