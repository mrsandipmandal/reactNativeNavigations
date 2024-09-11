import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Image } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const BottomSheet = ({ isVisible, setVisible }) => {
  const translateY = useRef(new Animated.Value(responsiveScreenHeight(80))).current; // Initial position of the sheet
  const sheetHeight = responsiveScreenHeight(80); // Set the height of the bottom sheet to 40% of screen height
  const handleGesture = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  // const handleGestureEnd = (event) => {
  //   // Close the bottom sheet if dragged down by more than half
  //   if (event.nativeEvent.translationY > sheetHeight / 2) {
  //     // setVisible(false);
  //   } else {
  //     // Animate it back to its original position
  //     Animated.spring(translateY, {
  //       toValue: 1,
  //       useNativeDriver: true,
  //     }).start();
  //   }
  // };
  
  const handleGestureEnd = (event) => {
    const threshold = sheetHeight / 2; // You can adjust this value
    const newPosition = event.nativeEvent.translationY > threshold ? threshold : 0;
    console.log(sheetHeight);
    if (event.nativeEvent.translationY > sheetHeight / 2) {
          setVisible(false);
        }
    Animated.spring(translateY, {
      toValue: newPosition,
      useNativeDriver: true,
    }).start();
  };
  
  return (
    <View style={styles.container}>
      {isVisible && (
        <PanGestureHandler
          onGestureEvent={handleGesture}
          onHandlerStateChange={(event) => {
            if (event.nativeEvent.state === State.END) {
              handleGestureEnd(event);
            }
          }}
        >
          <Animated.View
            style={[
              styles.sheet,
              {
                transform: [{
                  translateY: translateY.interpolate({
                    inputRange: [0, sheetHeight],
                    outputRange: [0, sheetHeight],
                    extrapolate: 'clamp'
                  })
                }]
              }
            ]}
          >
            <View style={styles.imagecontainer}>
              <Image source={require('../images/subs.png')} style={styles.image} />
              <Text style={styles.content}>Draggable Modal Content</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </PanGestureHandler>
      )}
    </View>
  );
};

// Define styles in a StyleSheet
const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Position the container absolutely to prevent affecting other layout elements
    bottom: responsiveScreenWidth(12), // Align it to the bottom of the screen
    width: responsiveScreenWidth(100), // Full width of the screen
    zIndex: 999, // Ensure it is on top of other components
  },
  sheet: {
    height: responsiveScreenHeight(80), // Height of the bottom sheet
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  content: {
    fontSize: responsiveScreenFontSize(2.5), // Responsive font size for content
  },
  closeButton: {
    color: 'blue',
    marginTop: 20,
    fontSize: responsiveScreenFontSize(2), // Responsive font size for the close button
  },
  imageContainer: {
    width: responsiveScreenWidth(100),
    alignItems: 'center', 
    borderColor: 'black', 
    // paddingTop: 0, 
  },
  image: {
    // width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(10), // Adjusted to better display the image
    resizeMode: 'contain', // Ensure the image scales properly
    alignSelf: 'center', // Center the image horizontally
    verticalAlign: 'top',
  },
});

export default BottomSheet;
