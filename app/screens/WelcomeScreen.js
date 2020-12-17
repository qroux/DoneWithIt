import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={{
        width: 400,
        height: 600,
        uri: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      }}
    >
      <View style={styles.logoContainer}>
        <Image
          style= {styles.logo}
          source={{
            height: 100,
            width: 93,
            uri: "https://yoplanning.com/wp-content/uploads/2019/08/airbnb-vector-png-airbnb-logo-airbnb-logo-877.png"
            }}
        />
        <Text
          style={styles.logoText}
        >
          DoneWithIt
        </Text>
        <Text
          style={styles.logoSlug}
        >
          Sell what you don't need
        </Text>        
      </View>

      <View
        style={styles.loginButton}
      >
        <Text style={{color: "inherit"}}>Log In</Text>
      </View>
      <View
        style={styles.registerButton}
      >
        <Text style={{color: "inherit"}}>Sign Up</Text>
      </View>

    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
    minWidth: 300

  },
  logo: {
    marginBottom: 15,
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
    textAlign: "center",
  },
  logoSlug: {
    color: "white",
    fontSize: "1.2rem",
    textTransform: 'capitalize',
    textAlign: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color:"white",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color:"white"
  }
  
})

export default WelcomeScreen;