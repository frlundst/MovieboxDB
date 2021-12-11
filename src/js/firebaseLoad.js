import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebaseconfig';
import { getFirestore } from "firebase/firestore"

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

// (async () => {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// })();

