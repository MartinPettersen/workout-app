import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import Preview from '../components/Preview'

const WorkoutSelectionScreen = (navigation) => {
  const workoutRef = db.collection("WorkoutTemplateCollection");

  const [workouts, setWorkouts] = useState([]);
  const [showPreviews, setShowPreviews] = useState([]);

  const showHide = (i) => {
    if(showPreviews.includes(i)){
      setShowPreviews(showPreviews.filter( (e) => e === i))

    } else{
      setShowPreviews([...showPreviews, i])
    }
  };

  const getWorkouts = async (workout) => {
    const test = await workoutRef.get();
    test.forEach((te) => {
      setWorkouts([...workouts, te.data()]);
    });

    const tet = await test.docs.map((doc) => doc.data());
    //   console.log(tet);
    setWorkouts(tet);
  };

  useEffect(() => {
    workoutRef.get().then((docs) => {
      docs.forEach((doc) => {
        getWorkouts(doc.data());
      });
      //console.log("data " + doc.data())
      //console.log(doc.data())
    });
  }, []);

  return (
    <ScrollView style={styles.blackContainer}>
      <View style={styles.addWorkoutContainer}>
        <Text style={styles.text}>There are: {workouts.length} workouts</Text>
        <View>
          {workouts.map((workout, i) => {
            return (
              <Preview key={i} workout={workout}/>
            );
          })}
        </View>
        <Text></Text>
      </View>
      <View style={styles.addWorkoutContainer}>
        <View style={styles.next}>

        <Text style={styles.text}>Make your own workout</Text>
        </View>
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

export default WorkoutSelectionScreen;
