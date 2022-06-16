import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core'


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
            }
        })

        return unsubscribe;
    },[])

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with: ', user.email);
        })
        .catch(error => alert(error.message));
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with: ', user.email);
        })
        .catch(error => alert(error.message));
    }

  return (
    <KeyboardAvoidingView 
    style={styles.container} 
    behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={[styles.buttonContainer, styles.wrapper]}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.button]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",

    alignItems: "center",
  },
  inputContainer: {
      width: '80%'
  },
input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 5,
    borderColor: 'darkorange',
    borderWidth: 1,

},
buttonContainer: {
    widt: "60%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
},
wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
button: {
    backgroundColor: "darkorange",
    width: '30%',
    padding: 15,
    borderRadius: 4,
    alignItems: "center",
    margin: 5,
},
buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
},
  
});
