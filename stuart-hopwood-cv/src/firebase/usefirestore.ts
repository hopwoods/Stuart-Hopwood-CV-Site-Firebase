import { addDoc as add, collection, doc, DocumentData, getDoc as get, getDocs, setDoc } from "firebase/firestore"
import { useFirebase } from "./useFirebase"
export function useFirestore() {

    const { db } = useFirebase()

    async function addDoc(collectionName: string, document: JSON) {
        try {
            const docRef = await add(collection(db, collectionName), document)
            console.log("Document written with ID: ", docRef.id)
        } catch (e) {
            console.error("Error adding document: ", e)
        }
    }

    async function getDoc(collectionName: string, documentId: string) {
        try {
            const docRef = doc(db, collectionName, documentId);
            const docSnap = await get(docRef)

            if (docSnap.exists())
                return docSnap.data()
            else
                return undefined

        } catch (e) {
            console.error("Error getting document: ", e)
        }
    }

    async function getAll(collectionName: string) {
        try {
            const dataArray: DocumentData[] = []
            const querySnapshot = await getDocs(collection(db, collectionName));

            if (!querySnapshot.empty)
                querySnapshot.forEach((doc) => {
                    dataArray.push(doc.data())
                });

            return dataArray

        } catch (e) {
            console.error("Error getting documents: ", e)
        }
    }



    async function addOrUpdateDoc(collectionName: string, documentId: string | number, document: JSON) {
        try {
            const collectionRef = collection(db, collectionName)
            await setDoc(doc(collectionRef, documentId.toString()), document)
            console.log("Document updated with ID: ", documentId)
        } catch (e) {
            console.error("Error adding document: ", e)
        }
    }

    return { addDoc, getDoc, getAll, addOrUpdateDoc }
}