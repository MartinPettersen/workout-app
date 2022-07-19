import { View, Text, Button } from "react-native";
import React from "react";
import { db } from '../firebase'
import { collection, doc, setDoc } from "firebase/firestore";

const WorkoutSelectionScreen = (navigation) => {

  const CreateWorkout = () => {

  
    const workoutTemplateData = {
      "workoutName": "The Golden Six",
      "creator": "Arnold Schwarzenegger",
      "weeks": 6,
      "instructions": "Arnold Schwarzenegger's beginner recommandation",
      "level" : "beginner",
      "excersises": [
        {
          excercise: "Squat",
          sets: 4,
          repetitions: 10,
        },
        {
          excercise: "Wide-Grip Flat Bench Press",
          sets: 3,
          repetitions: 10,
        },
        {
          excercise: "Chin-up",
          sets: 3,
          repetitions: "failure",
        },
        {
          excercise: "Behind-The-Neck Overheard Press",
          sets: 4,
          repetitions: 10,
        },
        {
          excercise: "Barbell Curl",
          sets: 3,
          repetitions: 10,
        },
        {
          excercise: "Bent Knee Sit-Up",
          sets: 3-4,
          repetitions: "failure",
        },
      ],

    }

    db.collection("WorkoutTemplateCollection").doc(workoutTemplateData.workoutName).set(
      workoutTemplateData, { merge: true}
    )
    .then(() => {
        alert("added workout template")
    })
    .catch((error) => {
      console.error(error.message);
    });
  }
  const ReadWorkout = () => {
    
  }
  const UppdateWorkout = () => {
    
  }  
  const DeleteWorkout = () => {
    
  }
  return (
    <View>
      <Text>CreateWorkoutScreen</Text>
      <Button title="Create Workout" onPress={CreateWorkout}></Button>
    </View>
  );
};

export default WorkoutSelectionScreen;
