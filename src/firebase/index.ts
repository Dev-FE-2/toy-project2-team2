// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAZ8tKp8GKFzrQs_mIDymBHujaw1BxlDto",
	authDomain: "toy-project-goodwork.firebaseapp.com",
	projectId: "toy-project-goodwork",
	storageBucket: "toy-project-goodwork.firebasestorage.app",
	messagingSenderId: "835481820592",
	appId: "1:835481820592:web:cf1b06ecff2755a7208a75",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // 인증정보(로그인 정보) 가져오기 로그인 시 import하여 활용

export const db = getFirestore(app); //firestore db 초기화 db 사용시 import하여 활용

export const storage = getStorage(app);
