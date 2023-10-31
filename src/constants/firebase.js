import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBFKOiohODdssALvCzKrBq4ue4fOkWJ2DH_5Q",
  authDomain: "atomic-task.firebaseio.com",
  projectId: "atomic-task",
  storageBucket: "atomic-task.appspot.com",
  messagingSenderId: "106199221123",
  appId: "1:106199221123:android:141149dba9400eda4abfa4",
  databaseURL : "https://atomic-task-4e592-default-rtdb.europe-west1.firebasedatabase.app"
};

let app;

if (firebase.apps.length === 0) {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();

const auth = firebase.auth();

const storage = firebase.storage().ref();

let database = firebase.database()

export { firebase, db, auth, storage, database };