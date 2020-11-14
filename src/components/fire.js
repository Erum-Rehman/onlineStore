import firebase from 'firebase'

var firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBQjaVp9dnilirW_MtQFlkfIfK5qAw9FZg",
    authDomain: "login-7b56c.firebaseapp.com",
    databaseURL: "https://login-7b56c.firebaseio.com",
    projectId: "login-7b56c",
    storageBucket: "login-7b56c.appspot.com",
    messagingSenderId: "546324964183",
    appId: "1:546324964183:web:80a8af8312ffc0b0da9412",
    measurementId: "G-G4L3ZZ8SNE"
  });
  // Initialize Firebase
var auth = firebaseApp.firestore();

export { auth }