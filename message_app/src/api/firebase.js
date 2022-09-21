import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDw0nO1BJzD79yJ4UYD6B6JAkvFt9dppuo",
    authDomain: "gbmychat.firebaseapp.com",
    databaseURL: "https://gbmychat-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gbmychat",
    storageBucket: "gbmychat.appspot.com",
    messagingSenderId: "105535690266",
    appId: "1:105535690266:web:0a33eec40c373d4deae3a3",
    measurementId: "G-EBF1VFH34G"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);