import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB-nMLzIwXOtSLa1VS7EVEQvPtG1ceCQiE",
    authDomain: "modsen-maps.firebaseapp.com",
    projectId: "modsen-maps",
    storageBucket: "modsen-maps.appspot.com",
    messagingSenderId: "202967452651",
    appId: "1:202967452651:web:2b984d345561403d8b67ae",
    measurementId: "G-J978SJ5PPC"
};

const app = initializeApp(firebaseConfig);

export const createUser = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email: string, password: string) => {
    return signInWithEmailAndPassword(getAuth(app), email, password);
}