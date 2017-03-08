import firebase from 'firebase';

const config = {
    
    apiKey: "AIzaSyB5ETDFQV0A_aeOaKmqlqBoOy32BeJjNh8",
    authDomain: "invitemeeting-7299b.firebaseapp.com",
    databaseURL: "https://invitemeeting-7299b.firebaseio.com",
    storageBucket: "invitemeeting-7299b.appspot.com",
    messagingSenderId: "767072914211"
    
};


    firebase.initializeApp(config);
    const database = firebase.database();

export default database;