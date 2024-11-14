import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  NextOrObserver,
  User,
  browserLocalPersistence,
  getAuth,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoDTFtdqdhOyl9j27y4fyB2fHV5Ab7UQM",
  authDomain: "solidify-9f2c4.firebaseapp.com",
  projectId: "solidify-9f2c4",
  storageBucket: "solidify-9f2c4.appspot.com",
  messagingSenderId: "995527252691",
  appId: "1:995527252691:web:4d6cf27ee1e38af6049226",
  measurementId: "G-VPBFRMCPVH",
};

export const app = initializeApp(firebaseConfig);

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
    display: "popup",
  });

  provider.addScope("https://www.googleapis.com/auth/userinfo.email");
  provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
  return setPersistence(getAuth(app), browserLocalPersistence).then(() =>
    signInWithPopup(getAuth(app), provider)
  );
};

export const signout = () => {
  return getAuth(app).signOut();
};

// create a listender callback as param for onAuthStateChanged
export const onAuthStateChanged = (callback: NextOrObserver<User>) => {
  firebaseOnAuthStateChanged(getAuth(app), callback);
};
export const getIdToken = () => {
  try {
    return getAuth(app).currentUser?.getIdToken();
  } catch (error) {
    return null;
  }
};
