import firebase from 'firebase';

 const config = {
    apiKey: "AIzaSyDLa3N_OeAiFWgCcN043KZV_DJnMLh3EYk",
    authDomain: "brickhackfun.firebaseapp.com",
    databaseURL: "https://brickhackfun.firebaseio.com",
    projectId: "brickhackfun",
    storageBucket: "brickhackfun.appspot.com",
    messagingSenderId: "144964126477"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
