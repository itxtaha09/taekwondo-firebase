import { initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA28-AYcQdJNMI8KkLoSBL1U9HPlyEFMT4",
    authDomain: "taekwondo-app-149-b295e.firebaseapp.com",
    projectId: "taekwondo-app-149-b295e",
    storageBucket: "taekwondo-app-149-b295e.appspot.com",
    messagingSenderId: "830248113022",
    appId: "1:830248113022:web:0a4dd74edba0d4ecc4d92f",
    databaseURL: "https://taekwondo-app-149-b295e-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig)