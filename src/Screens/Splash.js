import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainScreen')
        }, 1000);
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>Splash Screen</Text>
        </View>
    )
}

export default Splash