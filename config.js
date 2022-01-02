 import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyBK59M7WJkWu7dbw1KaxKC-ioXl6cfTfW8",
    authDomain: "news-e2e08.firebaseapp.com",
    databaseURL: "https://news-e2e08-default-rtdb.firebaseio.com",
    projectId: "news-e2e08",
    storageBucket: "news-e2e08.appspot.com",
    messagingSenderId: "582682541943",
    appId: "1:582682541943:web:a0a6984c9de657e05feb72",
    measurementId: "G-2ZW7MN31BQ"
 }

let app = firebase.initializeApp(firebaseConfig);

export default app.database();
