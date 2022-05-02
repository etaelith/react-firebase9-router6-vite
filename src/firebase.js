import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVYPKn4JjjVStVUmWTfeVeYeO_ZF_mLrU",
  authDomain: "react2022-firebase.firebaseapp.com",
  projectId: "react2022-firebase",
  storageBucket: "react2022-firebase.appspot.com",
  messagingSenderId: "988699794110",
  appId: "1:988699794110:web:64f77a025426292e909cef"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth};