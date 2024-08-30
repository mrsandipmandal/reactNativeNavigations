import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import ImagePicker from 'react-native-image-crop-picker';

const Profile = ({ navigation, route }) => {
  const { profileData } = route.params;
  const { name, phone, email, username, ppic } = profileData;
  const [profilePic, setProfilePic] = useState(ppic);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets) {
        const source = response.assets[0].uri;
        resizeImage(source);
      }
    });
  };

  // const resizeImage = (uri) => {
  //   ImageResizer.createResizedImage(uri, 300, 300, 'JPEG', 100)
  //     .then(resizedImageUri => {
  //       setProfilePic(resizedImageUri.uri);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  
  const resizeImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true, // for circular cropping
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 0.8,
    }).then(image => {
      console.log('Cropped image:', image);
      // Here you can set the cropped image to your state or send it to your server
    });
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button and Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../images/ArrowBackRounded.png')} style={styles.profileEditIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Cover Image */}
      <View style={styles.coverImageContainer}>
        <Image
          source={{ uri: 'https://cdn.wallpapersafari.com/51/86/DjrCzI.jpeg' }}
          style={styles.coverImage}
        />
        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <Image
            source={profilePic ? { uri: profilePic } : require('../images/account.png')}
            style={styles.profileImage}
          />
          {/* Edit Icon for Profile Picture */}
          <TouchableOpacity style={styles.editIconContainer} onPress={openImagePicker}>
            <Image source={require('../images/edit_square_black.png')} style={styles.editIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* User Information Card */}
      <View style={styles.userInfoCard}>
        <TouchableOpacity style={styles.cardEditButton}>
          <Image source={require('../images/edit_square_black.png')} style={styles.cardEditIcon} />
        </TouchableOpacity>
        {/* User Information */}
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>{name} ({username})</Text>
          <Text style={styles.userInfoText}>Email: {email}</Text>
          <Text style={styles.userInfoText}>Mobile: {phone}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6', // Equivalent to bg-gray-100
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  headerTitle: {
    padding: 10,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left',
  },
  coverImageContainer: {
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 160,
  },
  profileImageContainer: {
    position: 'absolute',
    bottom: -24,
    left: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: '10%',
    right: '8%',
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  userInfoCard: {
    marginTop: '8%',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    margin: 16,
    padding: 16,
    position: 'relative',
  },
  cardEditButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  userInfoContainer: {
    marginTop: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
  },
  userInfoText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4b5563',
  },
  profileEditIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginTop: 10,
  },
  cardEditIcon: {
    width: 30,
    height: 30,
  },
});

export default Profile;