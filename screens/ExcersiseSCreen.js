import { View, Text } from "react-native";
import React, { useState, useEffect  } from "react";
import axios from 'axios';

const ExcersiseScreen = (navigation) => {

  const [data, setData] = useState('');

  const getExcersise = (excersise) => {
    // api here
    let dataTemp = '';
    axios.get(`https://wger.de/api/v2/`)
    .then(response => {
      dataTemp = response.data
    })
    setData(dataTemp)
  }

  useEffect(() => {
    getExcersise();
  },[]);

  return (
    <View>
      <Text>ExcersiseScreen</Text>
      <Text>{data}</Text>
    </View>
  );
};

export default ExcersiseScreen;
