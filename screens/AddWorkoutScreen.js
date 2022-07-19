import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { Button } from "react-native-web";

const AddWorkoutScreen = (navigation) => {
  const [numberOfWeeks, setNumberOfWeeks] = useState("6");
  const [creator, setCreator] = useState("");
  const [nameOfWorkout, setNameOfWorkout] = useState("");
  const [instructions, setInstructions] = useState("");
  const [level, setLevel] = useState("");
  const [excersises, setExcersises] = useState([]);
  const [addExcersise, setAddExcersise] = useState(false);

  const [excercise, setExcercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const [excercise2, setExcercise2] = useState({
    name: "",
    sets: 0,
    reps: 0,
  });

  const submitExcersice = () => {
    console.log("i rurn");
    setExcersises([
      ...excersises,
      {
        name: excercise,
        sets: sets,
        reps: reps,
      },
    ]);
  };

  const CreateWorkout = () => {
    const workoutTemplateData = {
      workoutName: nameOfWorkout,
      creator: creator,
      weeks: numberOfWeeks,
      instructions: instructions,
      level: level,
      excersises: excersises,
    };

    db.collection("WorkoutTemplateCollection")
      .doc(workoutTemplateData.workoutName)
      .set(workoutTemplateData, { merge: true })
      .then(() => {
        alert("added workout template");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    console.log("added ann excersize");
    console.log(excersises);
  }, [excersises]);
  return (
    <ScrollView style={styles.blackContainer}>
      <View style={styles.addWorkoutContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Name of Workout: </Text>
          <TextInput
            style={styles.textInput}
            placeholder=""
            defaultValue={nameOfWorkout}
            onChangeText={(newText) => setNameOfWorkout(newText)}
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Creator: </Text>
          <TextInput
            style={styles.textInput}
            placeholder=""
            defaultValue={creator}
            onChangeText={(newText) => setCreator(newText)}
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Select number of weeks: </Text>
          <TextInput
            style={styles.textInput}
            placeholder=""
            defaultValue={numberOfWeeks}
            onChangeText={(newText) => setNumberOfWeeks(newText)}
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Instructions: </Text>
          <TextInput
            style={styles.textInput}
            placeholder=""
            defaultValue={instructions}
            onChangeText={(newText) => setInstructions(newText)}
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Experience Level: </Text>
          <TextInput
            style={styles.textInput}
            placeholder=""
            defaultValue={level}
            onChangeText={(newText) => setLevel(newText)}
          />
        </View>

        <Pressable
          style={styles.next}
          onPress={() => setAddExcersise(!addExcersise)}
        >
          <Text style={styles.text}>Add New Excercise</Text>
        </Pressable>
        {addExcersise ? (
          <View style={styles.next}>
            <Text style={styles.text}>New Excercise</Text>
            <View style={styles.wrapper}>
              <Text style={styles.text}>Excercise: </Text>
              <TextInput
                style={styles.textInput}
                placeholder=""
                defaultValue={excercise}
                onChangeText={(newText) => setExcercise(newText)}
              />
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.text}>Sets: </Text>
              <TextInput
                style={styles.textInput}
                placeholder=""
                defaultValue={sets}
                onChangeText={(newText) => setSets(newText)}
              />
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.text}>Reps: </Text>
              <TextInput
                style={styles.textInput}
                placeholder=""
                defaultValue={reps}
                onChangeText={(newText) => setReps(newText)}
              />
            </View>
            <Pressable style={styles.next} onPress={submitExcersice}>
              <Text style={styles.text}>Save</Text>
            </Pressable>
          </View>
        ) : (
          <View></View>
        )}
        {excersises.map((exc) => {
          return (
            <View style={styles.next}>
              <Text style={styles.text}>{exc.name}</Text>
              <Text style={styles.text}>{exc.sets}</Text>
              <Text style={styles.text}>{exc.reps}</Text>
            </View>
          );
        })}
        <Pressable style={styles.next} onPress={CreateWorkout}>
              <Text style={styles.text}>Submit Workout</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addWorkoutContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  blackContainer: {
    backgroundColor: "black",
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
