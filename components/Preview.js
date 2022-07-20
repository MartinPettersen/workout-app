import { StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";
import * as firebase from "firebase";
import { db } from '../firebase'
import { collection, doc, setDoc } from "firebase/firestore";


const Preview = (props) => {
  const [show, setShow] = useState(false);

  const showHide = () => {
    setShow(!show);
  };

  const CreateUserWorkout = (user) => {

    const userData = {
      "email": user.email,
      "workouts": [ props.workout
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

  const updateUserWorkout = (user, workouts) => {


    const userData = {
      "email": user.email,
      "workouts": [ ...workouts, props.workout
      ],
    }

    db.collection("userWorkoutCollection").doc(userData.email).set(
      userData, { merge: true}
    )
    .then(() => {
        alert("updated user workout")
    })
    .catch((error) => {
      console.error(error.message);
    });
  }


  const addWorkout = () => {
    const user = firebase.auth().currentUser
    console.log(user.email);
  
    const userExists = db.collection("userWorkoutCollection").doc(user.email);
    userExists.get()
    .then((doc) => {    
        if(doc.exists) {
            console.log("User exists");
            console.log(doc.data().workouts)
            updateUserWorkout(user, doc.data().workouts)
        } else {
              console.log("User does not exists")
              CreateUserWorkout(user);
              console.log("Creating workout")

          }
      })
          

    console.log('add workout to user acount')
  }





  return (
    <View style={styles.next}>
      <Pressable onPress={() => showHide()}>
        <View >
          <Text style={styles.text}>Workout: {props.workout.workoutName}</Text>
          <Text style={styles.text}>Level: {props.workout.level}</Text>

          <Text style={styles.text}>Description: {props.workout.instructions}</Text>
          {show ? (
            <View>
              <Text style={styles.text}>Creator: {props.workout.creator}</Text>
              <Text style={styles.text}>Weeks: {props.workout.weeks}</Text>
              {props.workout.excersises.map((excersise, i) => {
                return (
                  <View key={i} style={styles.border}>
                    <Text style={styles.text}>
                      Excercise: {excersise.excercise}
                    </Text>
                    <Text style={styles.text}>Sets: {excersise.sets}</Text>
                    <Text style={styles.text}>
                      Reps: {excersise.repetitions}
                    </Text>
                  </View>
                );
              })}
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </Pressable>
      <Pressable onPress={() => addWorkout()}>
          <View style={styles.next}>

          <Text style={styles.text}>Add Workout To Profile</Text>
          </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    flex: 1,
    justifyContent: "center",
  },

  header: {
    fontSize: 40,
    color: "white",
    margin: 0.5,
    marginBottom: 7,
  },
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
  border: {
    borderWidth: 1,
    borderColor: "orange",
    borderStyle: "solid",
    backgroundColor: "#181818",

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

export default Preview;
