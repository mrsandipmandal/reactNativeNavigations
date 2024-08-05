import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const Sidebar = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', height: 5, backgroundColor: 'blue' }}></View>
      <Image source={require('./images/account.png')}
        style={{ marginTop: 10, alignSelf: 'center', width: 80, height: 80, marginBottom: 10 }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        Sandip{' '}Mandal
      </Text>
      <View>
        <FlatList
          data={[
            {
              title: 'Profile',
              icon: require('./images/account.png')
            },
            {
              title: 'Shear',
              icon: require('./images/share.png')
            },
            {
              title: 'Cart',
              icon: require('./images/cart.png')
            },
            {
              title: 'Logout',
              icon: require('./images/logout.png')
            }
          ]}

          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity 
              style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                widthh: '100%',
                height: 50,
                }}
                onPress={() => {
                  if (item.title === 'Profile') {
                    navigation.closeDrawer();
                    alert(item.title+' Clicked');
                  }
                  if (item.title === 'Shear') {
                    navigation.closeDrawer();
                    alert(item.title+' Clicked');
                  }
                  if (item.title === 'Cart') {
                    navigation.closeDrawer();
                    alert(item.title+' Clicked');
                  }
                  if (item.title === 'Logout') {
                    navigation.closeDrawer();
                    alert(item.title+' Clicked');
                  }
                }}
                >
                <Image source={item.icon}
                  style={{ width: 24, height: 24, tintColor: 'black', marginLeft: 15 }}
                />
                <Text style={{ fontSize: 18, color:'#000', marginLeft: 15 }}>{item.title}</Text>
              </TouchableOpacity>
            )
          }
          }
          keyExtractor={item => item.title}
        />
      </View>
    </View>
  )
}

export default Sidebar