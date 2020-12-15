// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, Button, Alert, Platform, StatusBar } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click"
        onPress={() => Alert.prompt("Title", "Message", (text) => text) }
        color="orange"
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight - 24 : 0,
  }
});
