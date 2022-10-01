import { StoreApi } from 'zustand'
import { AppStore } from './appStore'

export type ThemeSlice = {
	prefersDark: boolean
	setPrefersDarkTheme: (value: boolean) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createThemeStore(set: StoreApi<AppStore>['setState'], get: StoreApi<AppStore>['getState']): ThemeSlice {
	return {
		prefersDark: true,

		setPrefersDarkTheme: (value: boolean) => set({ prefersDark: value }),
	}
}
