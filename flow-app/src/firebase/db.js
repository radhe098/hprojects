import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAtfymNnI_jfXQZhiWVeZhEgCsb3rdh-lw",
    authDomain: "streakmaster-dc0b8.firebaseapp.com",
    projectId: "streakmaster-dc0b8",
    storageBucket: "streakmaster-dc0b8.appspot.com",
    messagingSenderId: "764513702496",
    appId: "1:764513702496:web:80fd1e76c044a3dab3a905",
    measurementId: "G-2D83B0686R"
  };

    initializeApp(firebaseConfig);
  export const db = getFirestore();
  export const analytics = getAnalytics(app);