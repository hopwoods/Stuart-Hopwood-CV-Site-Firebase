import { FirebaseApp } from 'firebase/app'
import { User } from 'firebase/auth'
import { Firestore } from 'firebase/firestore'

import create from 'zustand'

export type GlobalState = {
	user?: User
	isAuthenticated: boolean,
	isAuthenticating: boolean
	firebaseInitiated: boolean
	db?: Firestore
	firebaseApp?: FirebaseApp

	storeUser: (user: User) => void
	deleteUser: () => void
	setIsAuthenticated: (value: boolean) => void
	setAuthenticating: (value: boolean) => void
	setFirebaseInitiated: (value: boolean) => void
	setDb: (db: Firestore) => void
	setFirebaseApp: (app: FirebaseApp) => void
}

export const useGlobalStore = create<GlobalState>((set) => ({

	isAuthenticated: false,
	isAuthenticating: false,
	firebaseInitiated: false,

	storeUser: (user: User) => set({ user: user }),
	deleteUser: () => set({ user: undefined }),
	setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
	setAuthenticating: (value: boolean) => set({ isAuthenticating: value }),
	setFirebaseInitiated: (value: boolean) => set({ firebaseInitiated: value }),
	setDb: (db: Firestore) => set({ db: db }),
	setFirebaseApp: (app: FirebaseApp) => set({ firebaseApp: app })
}))
