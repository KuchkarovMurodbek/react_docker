import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyAGrnIADOlD42AdNvQOP5RZk0I-3YgWAfM",
  authDomain: "favvora-admin-v2.firebaseapp.com",
  projectId: "favvora-admin-v2",
  storageBucket: "favvora-admin-v2.appspot.com",
  messagingSenderId: "1068219648885",
  appId: "1:1068219648885:web:d00fa84a52784e8c6ea13c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

// Add the public key generated from the console here.
getToken(messaging, {
  vapidKey:
    "BKKoNBWEW1N30PMXTsJk5EWXk0hK_RjVTjr-ehDynW4jb_-EcmgDmeW0iOyH84pXc1-Z5d1pQdLsnDRx-avNBVU",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });
