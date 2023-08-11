import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPWbliqamRyqPmWR-spMEQcfTA7dKj6U0",
  authDomain: "fitguru-78cbe.firebaseapp.com",
  databaseURL: "https://fitguru-78cbe.firebaseio.com",
  projectId: "fitguru-78cbe",
  storageBucket: "fitguru-78cbe.appspot.com",
  messagingSenderId: "346717513216",
};

if (!firebase.apps.length) {
  this.firebaseApp = firebase.initializeApp(firebaseConfig);
}
export default firebaseApp;
