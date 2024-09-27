// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYavRkrGhOXiC_8c-n6p1PdL6VF0LVCf4",
  authDomain: "mindu-backend.firebaseapp.com",
  databaseURL: "https://mindu-backend-default-rtdb.firebaseio.com",
  projectId: "mindu-backend",
  storageBucket: "mindu-backend.appspot.com",
  messagingSenderId: "678600416285",
  appId: "1:678600416285:web:c31639757e8889884abaf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export the database for use in other parts of the app
export { database };
