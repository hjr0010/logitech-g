// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwZp0em5qEfQjgW2Zd6KnhHu106XpwHWI",
  authDomain: "logitechg-dce95.firebaseapp.com",
  databaseURL: "https://logitechg-dce95-default-rtdb.firebaseio.com",
  projectId: "logitechg-dce95",
  storageBucket: "logitechg-dce95.appspot.com",
  messagingSenderId: "1085130157984",
  appId: "1:1085130157984:web:34f360fa88ed68173dbec5",
  measurementId: "G-JXTDRLX8JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);