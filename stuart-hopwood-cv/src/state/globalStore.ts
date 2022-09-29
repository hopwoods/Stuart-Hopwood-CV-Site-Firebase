import { FirebaseApp } from 'firebase/app'
import { User } from 'firebase/auth'
import { Firestore } from 'firebase/firestore'
import { StoreApi } from 'zustand'
import AppDatabase from '../database/appDatabase'
import { AppStore } from './appStore'

export type GlobalSlice = {
	user?: User
	isAuthenticated: boolean,
	isAuthenticating: boolean
	firebaseInitiated: boolean
	db?: Firestore
	firebaseApp?: FirebaseApp,
	appDb?: AppDatabase

	storeUser: (user: User) => void
	deleteUser: () => void
	setIsAuthenticated: (value: boolean) => void
	setAuthenticating: (value: boolean) => void
	setFirebaseInitiated: (value: boolean) => void
	storeDb: (db: Firestore) => void
	storeFirebaseApp: (app: FirebaseApp) => void
	storeAppDb: (appDb: AppDatabase) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createGlobalStore(set: StoreApi<AppStore>['setState'], get: StoreApi<AppStore>['getState']): GlobalSlice {
	return {
		isAuthenticated: false,
		isAuthenticating: false,
		firebaseInitiated: false,

		storeUser: (user: User) => set({ user: user }),

		deleteUser: () => set({ user: undefined }),

		setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),

		setAuthenticating: (value: boolean) => set({ isAuthenticating: value }),

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
