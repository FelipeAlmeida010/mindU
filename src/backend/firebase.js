// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCYavRkrGhOXiC_8c-n6p1PdL6VF0LVCf4", // Substitua pela sua chave da API
  authDomain: "mindu-backend.firebaseapp.com",
  databaseURL: "https://mindu-backend-default-rtdb.firebaseio.com",
  projectId: "mindu-backend",
  storageBucket: "mindu-backend.appspot.com",
  messagingSenderId: "678600416285",
  appId: "1:678600416285:web:c31639757e8889884abaf4"
};

// Initialize Firebase only if it hasn't been initialized yet
let app;
let auth;

try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  if (error.code !== 'app/duplicate-app') {
    console.error("Firebase initialization error:", error);
  }
}

// Get database instance
const database = getDatabase(app);

// Initialize Firebase Auth with AsyncStorage for persistence if not already initialized
if (!auth) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage), // Usar AsyncStorage para persistência
  });
}

export { database, auth }; // Export both the database and auth
