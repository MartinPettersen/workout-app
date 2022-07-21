import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as firebase from "firebase";
import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Excercise from "../components/Excercise";

const WorkoutScreen = (navigation) => {
  const user = firebase.auth().currentUser;
  //console.log(user.email);

  const [userWorkout, setUserWorkout] = useState();
  const [currentWorkout, setCurrentWorkout] = useState();

  const tester = (test) => {
    setCurrentWorkout(test);

  };

  useEffect(() => {

  const userExists = db.collection("userWorkoutCollection").doc(user.email);
  userExists.get().then((doc) => {
    if (doc.exists) {
      //console.log("User exists");
      setUserWorkout(doc.data().active_workout);
      //console.log(userWorkout);
      //setCurrentWorkout(doc.data().workouts.filter( (work) => work.workoutName === userWorkout))
      const test = doc.data().workouts.filter( (work) => work.workoutName === doc.data().active_workout)
      //console.log(doc.data().workouts.filter( (work) => work.workoutName === userWorkout))
      console.log(test.length);
      tester(test[0]);
    } else {
      console.log("User does not exists");
    }
  });


  }, []);

  const excersises = ["squats"];
  const [exerOne, setExerOne] = useState("");

  const getExcersise = (excersise) => {
    // api here
    let dataTemp = "";
    axios
      .get(`https://wger.de/api/v2/exercise/search/?term=${excersise}`)
      .then((response) => {
        //console.log(response.data.suggestions);

        dataTemp = response.data.suggestions;
      });
    return dataTemp;
  };

  /*
  useEffect(() => {
    setExerOne(getExcersise("squats"));
  }, []);
  useEffect(() => {
    console.log(exerOne);
  }, [exerOne]);
  useEffect(() => {
    console.log(userWorkout);
  }, [userWorkout]);
  */
  return (
    <View style={styles.container}>
      <View>
        {userWorkout !== undefined  && currentWorkout !== undefined? (
          <View>
            <Text style={styles.orange_text}>{currentWorkout.workoutName}</Text>
            {currentWorkout.excersises.map((ex, i) =>  {
              return <View key={i}>
                <Text style={styles.text}>{ex.excercise} {ex.repetitions}/{ex.sets}</Text>
                <Excercise ex={ex}/>
              </View>
            })}
          </View>
        ) : (
          <View >
            <Text style={styles.text}>You have no Workout selected</Text>
            <View >
              <View style={styles.wrapper}>
              <Text style={styles.text}>You can either </Text>
              <Pressable>
                <Text style={styles.orange_text}>SELECT </Text>
              </Pressable>
              </View>
              <Text style={styles.text}>a premade workout</Text>
              <View style={styles.wrapper}>
              <Text style={styles.text}>Or you can </Text>
              <Pressable>
                <Text style={styles.orange_text}>MAKE YOUR OWN</Text>
              </Pressable>
              </View>
            </View>
          </View>
        )}
      </View>
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
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  addWorkoutContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WorkoutScreen;
