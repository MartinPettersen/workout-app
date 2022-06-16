import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect  } from "react";
import axios from 'axios';

const WorkoutScreen = (navigation) => {

  const excersises = ['squats',]
  const [exerOne, setExerOne] = useState('');

  const getExcersise = (excersise) => {
    // api here
    let dataTemp = '';
    axios.get(`https://wger.de/api/v2/exercise/search/?term=${excersise}`)
    .then(response => {
      //console.log(response.data.suggestions);
      dataTemp = response.data.suggestions;
    })
    return dataTemp;
  }

  useEffect(() => {
    setExerOne(getExcersise('squats'));
  },[]);
  useEffect(() => {
    console.log(exerOne)

  },[exerOne]);
  return (
    <View style={styles.container}>
      <Text style={styles.orange_text}>WorkoutScreen</Text>
      <Text style={styles.orange_text}>f{exerOne}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
    margin: 5,
  },
  orange_text: {
    color: "darkorange",
    fontSize: 25,
    margin: 5,
  },
});

export default WorkoutScreen;
