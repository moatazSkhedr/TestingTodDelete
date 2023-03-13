import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyBCUIhlg8Nw5ua6TjktnQuADrUeHLgic9g",
    authDomain: "music-app-4bbdd.firebaseapp.com",
    projectId: "music-app-4bbdd",
    storageBucket: "music-app-4bbdd.appspot.com",
    messagingSenderId: "167220826636",
    appId: "1:167220826636:web:47ff0e1ce205bac032d429",
    measurementId: "G-W7CXMZ1VZY"
});
const db = firebaseApp.firestore();

export default db
