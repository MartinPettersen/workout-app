import { StyleSheet, View, Text, Pressable } from "react-native";

const Intro = (props) => {
  const todaysDate = () => {
    const daysInWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const date = new Date();
    return daysInWeek[date.getDay()];
  };

  return (
    <View style={styles.introContainer}>
      <Text style={styles.header}>Today is {todaysDate()}</Text>
      <Text style={styles.text}>Happy Workout</Text>
      <Pressable onPress={() => props.navigation.navigate("Workout")}>
        <Text style={styles.header}>Today's workout</Text>
      </Pressable>
      <Pressable onPress={() => props.navigation.navigate("Add Workout")}>

      <Text style={styles.text}>Add workout</Text>
      </Pressable>
{/*}
      <Pressable onPress={() => props.navigation.navigate("Create Workout")}>

      <Text style={styles.text}>Create workout</Text>
      </Pressable>
  */}
      <Pressable onPress={() => props.navigation.navigate("WorkoutSelection")}>

      <Text style={styles.header}>Change workout</Text>
      </Pressable>
      <Pressable onPress={() => props.navigation.navigate("Setup")}>

      <Text style={styles.header}>Setup</Text>
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
  text: {
    fontSize: 40,
    color: "darkorange",
    margin: 0.5,
    marginBottom: 7,
  },
});

export default Intro;
