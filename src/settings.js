/*
 * Created Date: Friday, 5th February 2021, 1:06:30 am
 * Author: Kingsley Chimezie
 */

/* FIREBASE CONFIG
-------------------------------- */
// PASTE YOUR WEB APP FIREBASE CONFIG HERE
var firebaseConfig = {
  apiKey: "AIzaSyB7nM-3OpYETjC4kLMuL0KS4APDMdcW3Sg",
  authDomain: "beemyvalentine-b6a0e.firebaseapp.com",
  projectId: "beemyvalentine-b6a0e",
  storageBucket: "beemyvalentine-b6a0e.appspot.com",
  messagingSenderId: "358122246162",
  appId: "1:358122246162:web:eda1c076bdce548b9208cb",
  measurementId: "G-2JMECVMTMH",
};

/* CLOUD FIRESTORE CONFIG
-------------------------------- */
const firestore = {
  collectionName: "valentines",
  docID: "test",
};

/* UI DATA
-------------------------------- */
const uiData = {
  valentinesFirstName: "Lauren",
  valentinesLastName: "Superfine",
  headerMessage: "Will you bee my Valentine? 🌹",
  resultHeaderYes: "You said yes! 😍",
  resultHeaderNo: "You said no 😢",
  yesImgLink: "https://media.giphy.com/media/b5LTssxCLpvVe/giphy.gif",
  noImgLink: "https://media.giphy.com/media/wIhfELB4LvDhe/giphy.gif",
  lastAnswerHeading: "Last answered:",
};
