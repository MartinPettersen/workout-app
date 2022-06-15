import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import Intro from '../components/Intro';
const HomeScreen = ({navigation}) => {
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