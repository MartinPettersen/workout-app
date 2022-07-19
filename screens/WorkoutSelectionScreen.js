import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { db } from '../firebase'
import { collection, doc, setDoc } from "firebase/firestore";

const WorkoutSelectionScreen = (navigation) => {
 const workoutRef = db.collection("WorkoutTemplateCollection");

  console.log(workoutRef.get());
  const [workouts, setWorkouts] = useState([])

  const getWorkouts = async(workout) => {
    console.log("recived workouts: " + workout.workoutName)
    


       const test = await workoutRef.get();
       test.forEach((te) => {
         console.log(te.data())
         setWorkouts([
          ...workouts,
          te.data()]);
       })
       
  }

  useEffect(() => {

    workoutRef.get().then((docs) => {
      docs.forEach((doc) => {
        getWorkouts(doc.data());
      })
        //console.log("data " + doc.data())
        //console.log(doc.data())
    })
    
  },[]);

  return (
    <View>
      <Text>There are:{workouts.length} workouts</Text>
      <Text>{workouts.map((workout, i) => {
        return (<View key={i}>
          <Text>{workout.workoutName}</Text>
          <Text>{workout.level}</Text>

          <Text>{workout.instructions}</Text>
        </View>);
      })}</Text>
      <Text></Text>
    </View>
  );
};

export default WorkoutSelectionScreen;
