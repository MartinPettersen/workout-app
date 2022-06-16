// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhunli-OwjG6h-Uv6E49wA0er8i7nTlTk",
  authDomain: "workout-app-b9d16.firebaseapp.com",
  projectId: "workout-app-b9d16",
  storageBucket: "workout-app-b9d16.appspot.com",
  messagingSenderId: "1016893464819",
  appId: "1:1016893464819:web:9f9e7f1974d415d4b39786"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0 ){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth()

export { auth };