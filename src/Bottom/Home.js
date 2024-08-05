import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
        backgroundColor: 'white'
      }}
      >
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => {
            navigation.openDrawer()
          }}
        >
          <Image
            source={require('../images/menu-rounded.png')}
            style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 15 }}>React Native</Text>
      </View>
      <Image source={require('../images/banner-2.webp')}
        style={{
          width: '94%',
          height: 170,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 20
        }} />
      <Text
        style={{
          marginLeft: 15,
          fontSize: 18,
          fontWeight: '600',
          color: '#000',
          marginTop: 20
        }}>Name Of The Item</Text>
      <FlatList
        data={[
          require('../images/banner-1.jpg'),
          require('../images/banner-1.jpg'),
          require('../images/banner-1.jpg'),
          require('../images/banner-1.jpg'),
          require('../images/banner-1.jpg'),
        ]}
        renderItem={({ item, index }) => {
          return (
            <Image
              source={item}
              style={{
                width: '95%',
                height: 150,
                borderRadius: 10,
                marginTop: 10,
                alignSelf: 'center'
              }} />
          );
        }}
        />
    </View >
  )
}

export default Home