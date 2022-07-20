import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import Intro from '../components/Intro';
import * as firebase from "firebase";

const HomeScreen = ({navigation}) => {
  const user = firebase.auth().currentUser
  console.log(user.email);
  return (
    <View style={styles.container}>
        <Intro navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default HomeScreen