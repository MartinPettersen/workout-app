import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import CheckBox from "expo-checkbox";

const AddWorkoutScreen = (navigation) => {
  const [numberOfWeeks, setNumberOfWeeks] = useState("6");
  const [mond, setMond] = useState([
    {
      day: false,
      excersises: [
        {
          excersise: "",
          reps: "",
          sets: "",
          previousWeight: "",
        },
      ],
    },
    {
      day: false,
      excersises: [
        {
          excersise: "",
          reps: "",
          sets: "",
          previousWeight: "",
        },
      ],
    },
    {
      day: false,
      excersises: [
        {
          excersise: "",
          reps: "",
          sets: "",
          previousWeight: "",
        },
      ],
    },
    {
      day: false,
      excersises: [
        {
          excersise: "",
          reps: "",
          sets: "",
          previousWeight: "",
        },
      ],
    },
    {
      day: false,
      excersises: [
        {
          excersise: "",
          reps: "",
          sets: "",
          previousWeight: "",
        },
      ],
    },
    {
      day: false,
      excersises: [
        {
          excersise: "",
          reps: "",
          sets: "",
          previousWeight: "",
        },
      ],
    },
    {
      day: false,
      excersises: [
        {
          excersise: "",
          reps: "",
          sets: "",
          previousWeight: "",
        },
      ],
    },
  ]);

  let weeks = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  let excersise = {
    excersise: "",
    reps: "",
    sets: "",
    previousWeight: "",
  };

  let day = {
    nr: "-1",
    excersises: [],
  };
  let workout = {
    weeks: "",
    days: "",
    daylyWorkout: [],
  };

  const uppdateState = (copy) => {
    setMond(copy);
  };
  return (
    <View style={styles.addWorkoutContainer}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Select number of weeks: </Text>
        <TextInput
          style={styles.textInput}
          placeholder=""
          defaultValue={numberOfWeeks}
          onChangeText={(newText) => setNumberOfWeeks(newText)}
        />
      </View>
      <Text style={styles.text}>Select the days in the week</Text>
      {weeks.map((weekday, index) => (
        <View style={styles.wrapper} key={weekday}>
          <Text style={styles.text}>{weekday}</Text>
          <CheckBox
            value={mond[index].day}
            style={styles.text}
            onValueChange={() => {
              const copy = [...mond];
              copy[index].day = !mond[index].day;
              uppdateState(copy);
            }}
          />
          <Text style={styles.text}>{mond.weekday}</Text>
        </View>
      ))}
      <Text style={styles.next}>Next</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addWorkoutContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
    margin: 5,
  },
  next: {
    color: "orange",
    fontSize: 25,
    margin: 5,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "orange",
    borderStyle: "solid",
    backgroundColor: "#181818",
    padding: 10,
  },
  textInput: {
    color: "white",
    borderWidth: 2,
    borderColor: "orange",
    borderStyle: "solid",
    backgroundColor: "#404040",
    fontSize: 25,
    paddingHorizontal: 6,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
});

export default AddWorkoutScreen;
