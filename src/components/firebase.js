import firebase from 'firebase'


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyByVAPjLvTPMurfLZLo7fbFK3jMu3EsSdc",
    authDomain: "contact-form-2b415.firebaseapp.com",
    databaseURL: "https://contact-form-2b415.firebaseio.com",
    projectId: "contact-form-2b415",
    storageBucket: "contact-form-2b415.appspot.com",
    messagingSenderId: "1029453720964",
    appId: "1:1029453720964:web:abca9b871d2f13cacc41d1",
    measurementId: "G-LYZD7N3LKS"
});

var db = firebaseApp.firestore();

export { db }