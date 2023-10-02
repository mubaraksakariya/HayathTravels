import React, { createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

// Initialize Firebase with your configuration
const firebase = initializeApp({
    apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
});


const auth = getAuth(firebase)
const db = getFirestore(firebase);
const storage = getStorage(firebase);

// Create a Firebase context
export const FirebaseContext = createContext(null);
export const DbContext = createContext(null);
export const StorageContext = createContext(null);


// Create a Firebase auth provider component
export function FirebaseProvider({ children }) {
    return (
        <FirebaseContext.Provider value={auth}>
            {children}
        </FirebaseContext.Provider>
    );
}
// Create a Firebase db provider component
export function DbProvider({ children }) {
    return (
        <DbContext.Provider value={db}>
            {children}
        </DbContext.Provider>
    );
}

// Create a Firebase storage provider component
export function StorageProvider({ children }) {
    return (
        <StorageContext.Provider value={storage}>
            {children}
        </StorageContext.Provider>
    );
}

// Custom hook to access Firebase auth instance
export function useFirebaseAuth() {
    return useContext(FirebaseContext);
}

// Custom hook to access Firebase db instance
export function useFirebaseDb() {
    return useContext(DbContext);
}

// Custom hook to access Firebase storage instance
export function useFirebaseStorage() {
    return useContext(StorageContext);
}