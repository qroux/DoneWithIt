import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import colors from '../config/colors'

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        style={styles.photo}
        resizeMode="contain"
        source={{
          uri: "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=979&q=80"
        }}
      />
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    position: "relative"
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30

  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30

  },
  photo: {
    width: '100%',
    height: '100%',
  }

})

export default ViewImageScreen;