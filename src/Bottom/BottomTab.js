import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";

const BottomTab = ({ navigation }) => {
    const { isVisible, setVisible } = useState(false)
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

            <View style={{ flex: 1 }}>
                <Modal
                    style={{ width: '100%', marginLeft: 0, marginBottom: 0 }}
                    isVisible={true}
                    onPressOutSide={() => {
                        setVisible(false);
                    }}
                >
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 52,
                            height: 300,
                            backgroundColor: '#fff',
                            width: '100%',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20
                        }}>
                    </View>
                </Modal>
            </View>

        </View>
    )
}

export default BottomTab