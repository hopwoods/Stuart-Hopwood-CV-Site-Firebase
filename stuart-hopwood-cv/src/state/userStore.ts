import { User } from 'firebase/auth'
import { StoreApi } from 'zustand'
import { AppStore } from './appStore'

export type UserSlice = {
	user?: User
	isAuthenticated: boolean
	isAuthenticating: boolean
	storeUser: (user: User) => void
	deleteUser: () => void
	setIsAuthenticated: (value: boolean) => void
	setAuthenticating: (value: boolean) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createUserStore(set: StoreApi<AppStore>['setState'], get: StoreApi<AppStore>['getState']): UserSlice {
	return {
		isAuthenticated: false,
		isAuthenticating: false,

		storeUser: (user: User) => set({ user: user }),

		deleteUser: () => set({ user: undefined }),

		setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),

		setAuthenticating: (value: boolean) => set({ isAuthenticating: value })
	}
}
