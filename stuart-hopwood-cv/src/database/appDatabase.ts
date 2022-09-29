import {
	addDoc as add,
	collection,
	CollectionReference,
	deleteDoc as del,
	doc,
	DocumentData,
	DocumentReference,
	DocumentSnapshot,
	FieldPath,
	Firestore,
	getDoc as get,
	getDocs,
	orderBy,
	OrderByDirection,
	Query,
	query,
	QuerySnapshot,
	setDoc
} from 'firebase/firestore'

/** Wrapper around FireStore functions for working with the database */
export default class AppDatabase {
	db: Firestore
	readonly MISSING_DB_MESSAGE = 'DB is missing'

	constructor(firestore: Firestore) {
		this.db = firestore
	}

	addDoc = async (collectionName: string, document: object) => {
		try {
			if (this.db) {
				const docRef: DocumentReference<DocumentData> = await add(collection(this.db, collectionName), document)
				console.log('Document written with ID: ', docRef.id)
				return docRef.id
			}
			throw this.MISSING_DB_MESSAGE
		} catch (e) {
			console.error('Error adding document: ', e)
		}
	}

	addOrUpdateDoc = async (collectionName: string, documentId: string | number, document: object) => {
		try {
			if (this.db) {
				const collectionRef: CollectionReference<DocumentData> = collection(this.db, collectionName)

				await setDoc(doc(collectionRef, documentId.toString()), document)
				console.log('Document updated with ID: ', documentId)
			}
			throw this.MISSING_DB_MESSAGE
		} catch (e) {
			console.error('Error adding document: ', e)
		}
	}

	getDoc = async (collectionName: string, documentId: string): Promise<DocumentData | undefined> => {
		try {
			if (this.db) {
				const docRef: DocumentReference<DocumentData> = doc(this.db, collectionName, documentId)
				const docSnap: DocumentSnapshot<DocumentData> = await get(docRef)

				if (docSnap.exists())
					return docSnap.data()
				else
					return undefined
			}
			throw this.MISSING_DB_MESSAGE

		} catch (e) {
			console.error('Error getting document: ', e)
		}
	}

	getAll = async (collectionName: string): Promise<QuerySnapshot<DocumentData> | undefined> => {
		try {
			if (this.db) {
				const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(this.db, collectionName))

				if (!querySnapshot.empty)
					return querySnapshot
			}
			throw this.MISSING_DB_MESSAGE

		} catch (e) {
			console.error('Error getting documents: ', e)
		}
	}

	getAllAndSort = async (collectionName: string, orderByConstraint: OrderByConstraint) => {
		try {
			if (this.db) {
				const collectionRef: CollectionReference<DocumentData> = collection(this.db, collectionName)
				const q: Query<DocumentData> = query(collectionRef, orderBy(orderByConstraint.field, orderByConstraint.direction))
				const results = await getDocs(q)

				return results
			}
			throw this.MISSING_DB_MESSAGE

		} catch (e) {
			console.error('Error getting documents: ', e)
		}
	}

	deleteDoc = async (path: string) => {
		try {
			if (this.db) {
				const docRef: DocumentReference<DocumentData> = doc(this.db, path)
				const docSnap: DocumentSnapshot<DocumentData> = await get(docRef)

				if (docSnap.exists())
					await del(docRef)
			}
			throw this.MISSING_DB_MESSAGE
		} catch (e) {
			console.error('Error getting documents: ', e)
		}
	}


	makeId = (length?: number) => {
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
}

type OrderByConstraint = {
	field: FieldPath | string
	direction?: OrderByDirection
}
