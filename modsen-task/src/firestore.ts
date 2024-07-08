import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import {app} from "./firebase";

const db = getFirestore(app);


export const addFavoritePlace = async (userId: string, placeId: string) => {
    try {
        const data = {
            place_id: placeId
        };

        const userCollection = collection(db, userId);
        const docRef = await addDoc(userCollection, data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const getFavoritePlaces = async (userId: string) => {
    const userCollection = collection(db, userId);
    const querySnapshot = await getDocs(userCollection);
    const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return documents;
}

export const deleteFavoritePlace = async (userId: string, placeId: string) => {
    try {
        const docRef = doc(db, userId, placeId);
        await deleteDoc(docRef);
        console.log("Document deleted");
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
}