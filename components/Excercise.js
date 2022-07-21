import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { useState } from 'react'

const Excercise= (ex) => {
  const [ weight, setWeight] = useState("");

  return (
    <View style={styles.introContainer}>
      <View style={styles.wrapper}>
      <Text style={styles.text}>{ex.excercise} {ex.repetitions}/{ex.sets} </Text>
          <TextInput
            style={styles.textInput}
            placeholder=""
            defaultValue={weight}
            onChangeText={(newText) => setWeight(newText)}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  introContainer: {
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

export default Excercise;
