import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import * as firebase from "firebase";
import { db } from '../firebase'
import { collection, doc, setDoc } from "firebase/firestore";

const Setup = ({navigation}) => {
  const user = firebase.auth().currentUser
  console.log(user.email);

  const userExists = db.collection("userWorkoutCollection").doc(user.email);
  userExists.get()
  .then((doc) => {    
      if(doc.exists) {
          console.log("User exists");
        } else {
            console.log("User does not exists")
        }
    })
        
  const CreateUserWorkout = () => {

    const userData = {
      "email": user.email,
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
        <Text style={styles.text}>First time Setup</Text>
      <Button title="Done" onPress={CreateUserWorkout}></Button>
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
    text: {
        color: "white",
        fontSize: 25,
        margin: 5,
      },
  });

export default Setup