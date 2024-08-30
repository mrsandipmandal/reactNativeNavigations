import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { logout } from './Sidebar/Logout';
import AsyncStorage from '@react-native-async-storage/async-storage'


const Sidebar = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [ppic, setPpic] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('@user_data');
        if (userData !== null) {
          // console.log(userData);
          const data = JSON.parse(userData);
          setUsername(data.username);
          setName(data.name);
          setPpic(data.image_path);
          setEmail(data.email);
          setPhone(data.mobile);
        } else {
          navigation.replace('Login')
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await logout(navigation);
    } catch (error) {
      console.error('Error handling logout:', error);
    }
  };

  const handleProfile = () => {
    const profileData = {
      email: email,
      phone: phone,
      name: name,
      username: username,
      ppic: ppic,
    };

    navigation.navigate('Profile', { profileData });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: '100%',
        height: 5,
        backgroundColor: 'blue'
      }}></View>
      <TouchableOpacity
        onPress={() => {
          navigation.closeDrawer()
        }}
      >
        <Image source={require('./images/ArrowBackRounded.png')}
          style={{
            width: 30,
            height: 30,
            marginLeft: 5,
            marginTop: 10
          }} />
      </TouchableOpacity>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity onPress={() => {
          navigation.closeDrawer();
          handleProfile();
        }}>
          <Image source={ppic ? { uri: ppic } : require('./images/account.png')}
            style={{
              marginTop: 2,
              alignSelf: 'center',
              width: 100,
              height: 100,
              borderRadius: 50,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: 'lightgray'
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 700,
            alignSelf: 'center',
          }}>
          {name ? name : "Demo Name"}
        </Text>
      </View>
      <View>
        <FlatList
          data={[
            {
              title: 'Shear',
              icon: require('./images/share.png')
            },
            {
              title: 'Star',
              icon: require('./images/star.png')
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
                  if (item.title === 'Shear') {
                    navigation.closeDrawer();
                    alert(item.title + ' Clicked');
                  }
                  if (item.title === 'Cart') {
                    navigation.closeDrawer();
                    alert(item.title + ' Clicked');
                  }
                  if (item.title === 'Logout') {
                    navigation.closeDrawer();
                    handleLogout();
                  }
                }}
              >
                <Image source={item.icon}
                  style={{ width: 24, height: 24, tintColor: 'black', marginLeft: 15 }}
                />
                <Text style={{ fontSize: 18, color: '#000', marginLeft: 15 }}>{item.title}</Text>
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