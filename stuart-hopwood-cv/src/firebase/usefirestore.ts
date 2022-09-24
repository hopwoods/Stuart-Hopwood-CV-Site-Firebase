import { addDoc as add, collection, deleteDoc as del, doc, DocumentData, getDoc as get, getDocs, orderBy, query, QuerySnapshot, setDoc } from 'firebase/firestore'

import { useFirebase } from './useFirebase'
export function useFirestore() {

	const { db } = useFirebase()

	async function addDoc(collectionName: string, document: object) {
		try {
			const docRef = await add(collection(db, collectionName), document)
			console.log('Document written with ID: ', docRef.id)
			return docRef.id
		} catch (e) {
			console.error('Error adding document: ', e)
		}
	}
	async function addOrUpdateDoc(collectionName: string, documentId: string | number, document: object) {
		try {
			const collectionRef = collection(db, collectionName)
			await setDoc(doc(collectionRef, documentId.toString()), document)
			console.log('Document updated with ID: ', documentId)
		} catch (e) {
			console.error('Error adding document: ', e)
		}
	}

	async function getDoc(collectionName: string, documentId: string): Promise<DocumentData | undefined> {
		try {
			const docRef = doc(db, collectionName, documentId)
			const docSnap = await get(docRef)

			if (docSnap.exists())
				return docSnap.data()
			else
				return undefined

		} catch (e) {
			console.error('Error getting document: ', e)
		}
	}

	async function getAll(collectionName: string): Promise<QuerySnapshot<DocumentData> | undefined> {
		try {
			const querySnapshot = await getDocs(collection(db, collectionName))

			if (!querySnapshot.empty)
				return querySnapshot

		} catch (e) {
			console.error('Error getting documents: ', e)
		}
	}


	type OrderByConstraint = {
		field: string
		direction: 'asc' | 'desc'
	}

	async function getAllAndSort(collectionName: string, orderByConstraint: OrderByConstraint) {
		const collectionRef = collection(db, collectionName)

		const q = query(collectionRef, orderBy(orderByConstraint.field, orderByConstraint.direction))

		const results = await getDocs(q)

		return results
	}

	async function deleteDoc(path: string) {
		const docRef = doc(db, path)
		const docSnap = await get(docRef)

		if (docSnap.exists())
			await del(docRef)
	}

	function makeId(length?: number) {
		const idLength = length ? length : 20
		let result = ''
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		const charactersLength = characters.length
		for (let i = 0;i < idLength;i++) {
			result += characters.charAt(Math.floor(Math.random() *
				charactersLength))
		}
		return result
	}



	return { addDoc, getDoc, getAll, getAllAndSort, addOrUpdateDoc, deleteDoc, makeId }
}