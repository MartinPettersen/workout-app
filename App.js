import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Intro from "./components/Intro";
import test from "./screens/test";
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import AddWorkoutScreen from "./screens/AddWorkoutScreen";
import CreateWorkoutScreen from "./screens/CreateWorkoutScreen";

import WorkoutSelectionScreen from "./screens/WorkoutSelectionScreen";
import ExcersiseScreen from "./screens/ExcersiseSCreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";
// export const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
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
          headerTintColor: 'darkorange',
          headerStyle: { backgroundColor: 'black'}
        }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" options={{title: "Happy Workout"}}component={HomeScreen} />
          <Stack.Screen name="Excersise" component={ExcersiseScreen} />
          <Stack.Screen name="Workout" component={WorkoutScreen} />
          <Stack.Screen name="Add Workout" options={{title: "tester"}} component={AddWorkoutScreen} />
          <Stack.Screen name="Create Workout" component={CreateWorkoutScreen} />
          
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
