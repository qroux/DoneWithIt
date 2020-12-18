import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
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
    flex: 1,
  },
  photo: {
    width: '100%',
    height: '100%',
  }

})

export default ViewImageScreen;