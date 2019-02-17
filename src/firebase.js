import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB_YR4IjH0DzPpASYs1NNz8ycC_bGUbLlM",
  authDomain: "brickhack-da0a7.firebaseapp.com",
  databaseURL: "https://brickhack-da0a7.firebaseio.com",
  projectId: "brickhack-da0a7",
  storageBucket: "brickhack-da0a7.appspot.com",
  messagingSenderId: "906112012178"
};
export default firebase.initializeApp(config);
