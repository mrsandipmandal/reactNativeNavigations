import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const BottomTab = () => {
    return (
        <View>
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
        </View>
    )
}

export default BottomTab