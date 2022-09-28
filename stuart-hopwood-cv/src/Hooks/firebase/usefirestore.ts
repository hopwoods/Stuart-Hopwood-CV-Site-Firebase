import { addDoc as add, collection, deleteDoc as del, doc, DocumentData, FieldPath, getDoc as get, getDocs, orderBy, OrderByDirection, query, QuerySnapshot, setDoc } from 'firebase/firestore'
import { useCallback } from 'react'
import { useGlobalStore } from '../../state/globalStore'
export function useFirestore() {
	const { db } = useGlobalStore()
	const MISSING_DB_MESSAGE = 'DB is missing'

	const addDoc = useCallback(async (collectionName: string, document: object) => {
		try {
			if (db) {
				const docRef = await add(collection(db, collectionName), document)
				console.log('Document written with ID: ', docRef.id)
				return docRef.id
			}
			throw MISSING_DB_MESSAGE
		} catch (e) {
			console.error('Error adding document: ', e)
		}
	}, [db])

	const addOrUpdateDoc = useCallback(async (collectionName: string, documentId: string | number, document: object) => {
		try {
			if (db) {
				const collectionRef = collection(db, collectionName)
				await setDoc(doc(collectionRef, documentId.toString()), document)
				console.log('Document updated with ID: ', documentId)
			}
			throw MISSING_DB_MESSAGE
		} catch (e) {
			console.error('Error adding document: ', e)
		}
	}, [db])

	const getDoc = useCallback(async (collectionName: string, documentId: string): Promise<DocumentData | undefined> => {
		try {
			if (db) {
				const docRef = doc(db, collectionName, documentId)
				const docSnap = await get(docRef)

				if (docSnap.exists())
					return docSnap.data()
				else
					return undefined
			}
			throw MISSING_DB_MESSAGE

		} catch (e) {
			console.error('Error getting document: ', e)
		}
	}, [db])

	const getAll = useCallback(async (collectionName: string): Promise<QuerySnapshot<DocumentData> | undefined> => {
		try {
			if (db) {
				const querySnapshot = await getDocs(collection(db, collectionName))

				if (!querySnapshot.empty)
					return querySnapshot
			}
			throw MISSING_DB_MESSAGE

		} catch (e) {
			console.error('Error getting documents: ', e)
		}
	}, [db])

	type OrderByConstraint = {
		field: FieldPath | string
		direction?: OrderByDirection
	}

	const getAllAndSort = useCallback(async (collectionName: string, orderByConstraint: OrderByConstraint) => {
		try {
			if (db) {
				const collectionRef = collection(db, collectionName)

				const q = query(collectionRef, orderBy(orderByConstraint.field, orderByConstraint.direction))

				const results = await getDocs(q)

				return results
			}
			throw MISSING_DB_MESSAGE

		} catch (e) {
			console.error('Error getting documents: ', e)
		}
	}, [db])

	const deleteDoc = useCallback(async (path: string) => {
		try {
			if (db) {
				const docRef = doc(db, path)
				const docSnap = await get(docRef)

				if (docSnap.exists())
					await del(docRef)
			}
			throw MISSING_DB_MESSAGE
		} catch (e) {
			console.error('Error getting documents: ', e)
		}
	}, [db])


	const makeId = useCallback((length?: number) => {
		const idLength = length ? length : 20
		let result = ''
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		const charactersLength = characters.length
		for (let i = 0;i < idLength;i++) {
			result += characters.charAt(Math.floor(Math.random() *
				charactersLength))
		}
		return result
	}, [])

	return { addDoc, getDoc, getAll, getAllAndSort, addOrUpdateDoc, deleteDoc, makeId }
}