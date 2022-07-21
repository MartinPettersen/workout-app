import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import Intro from '../components/Intro';
import * as firebase from "firebase";
import { db } from '../firebase'
import { collection, doc, setDoc } from "firebase/firestore";

const HomeScreen = ({navigation}) => {
  const user = firebase.auth().currentUser
  console.log(user.email);


  const userExists = db.collection("userWorkoutCollection").doc(user.email);
  userExists.get()
  .then((doc) => {    
      if(doc.exists) {
          console.log("User exists");
        } else {
            console.log("User does not exists")
            CreateUserWorkout();
        }
    })
        
  const CreateUserWorkout = () => {

    const userData = {
      "email": user.email,
      "active_workout" : "",
      "workouts": [
      ],
    }

    db.collection("userWorkoutCollection").doc(userData.email).set(
      userData, { merge: true}
    )
    .then(() => {
        alert("added user workout")
    })
    .catch((error) => {
      console.error(error.message);
    });
  }

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