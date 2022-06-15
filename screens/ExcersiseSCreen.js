import { View, Text } from "react-native";
import React from "react";
import axios from 'axios';

const ExcersiseScreen = (navigation) => {



  const getExcersise = (excersise) => {
    // api here
    let data = '';
    axios.get(`https://wger.de/api/v2/`)
    .then(response => {
      data = response.data
    })
    return data
  }

  return (
    <View>
      <Text>ExcersiseScreen</Text>
      <Text>{getExcersise()}</Text>
    </View>
  );
};

export default ExcersiseScreen;
