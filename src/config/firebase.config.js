import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
// import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDIercOhTQA_Sc4cGlbqL7xQ-0Rx82B74s",
  authDomain: "codemyte-academy.firebaseapp.com",
  projectId: "codemyte-academy",
  storageBucket: "codemyte-academy.firebasestorage.app",
  messagingSenderId: "852859908971",
  appId: "1:852859908971:web:f72b0a9547893a9081522e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  usefetchStreams: false,
});
// export const messaging = getMessaging(app);