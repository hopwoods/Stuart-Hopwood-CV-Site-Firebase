import { FirebaseApp } from 'firebase/app'
import { Firestore } from 'firebase/firestore'
import { StoreApi } from 'zustand'
import AppDatabase from '../database/appDatabase'
import { AppStore } from './appStore'

export type DataSlice = {
	firebaseInitiated: boolean
	db?: Firestore
	firebaseApp?: FirebaseApp,
	appDb?: AppDatabase

	setFirebaseInitiated: (value: boolean) => void
	storeDb: (db: Firestore) => void
	storeFirebaseApp: (app: FirebaseApp) => void
	storeAppDb: (appDb: AppDatabase) => void
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createDataStore(set: StoreApi<AppStore>['setState'], get: StoreApi<AppStore>['getState']): DataSlice {
	return {
		firebaseInitiated: false,

		setFirebaseInitiated: (value: boolean) => set({ firebaseInitiated: value }),

		storeDb: (db: Firestore) => {
			console.log('Storing Firestore Database')
			set({ db: db })
		},
		storeFirebaseApp: (app: FirebaseApp) => {
			console.log('Storing Firebase App')
			set({ firebaseApp: app })
		},

		storeAppDb: (appDb: AppDatabase) => {
			console.log('Storing Application Database Wrapper')
			set({ appDb: appDb })
		}
	}
}