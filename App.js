import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Intro from "./components/Intro";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import test from "./screens/test";
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import AddWorkoutScreen from "./screens/AddWorkoutScreen";
import WorkoutSelectionScreen from "./screens/WorkoutSelectionScreen";
import ExcersiseScreen from "./screens/ExcersiseSCreen";

export const Stack = createNativeStackNavigator();

const App = () => {
  const navTheme = {
    colors: {
      background: "#000000",
    },
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTintColor: 'orange',
          headerStyle: { backgroundColor: 'black'}
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Excersise" component={ExcersiseScreen} />
          <Stack.Screen name="Workout" component={WorkoutScreen} />
          <Stack.Screen name="Add Workout" options={{title: "tester"}} component={AddWorkoutScreen} />
          <Stack.Screen
            name="WorkoutSelection"
            component={WorkoutSelectionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
