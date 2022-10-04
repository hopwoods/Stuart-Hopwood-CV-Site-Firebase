import { StoreApi } from 'zustand'
import { AppStore } from './appStore'

export type ThemeSlice = {
	prefersDark: boolean
	setPrefersDarkTheme: (value: boolean) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createThemeStore(set: StoreApi<AppStore>['setState'], get: StoreApi<AppStore>['getState']): ThemeSlice {
	return {
		prefersDark: getThemePreference(),
		setPrefersDarkTheme: (value: boolean) => {
			localStorage.setItem('theme', get().prefersDark ? 'light' : 'dark')
			set({ prefersDark: value })
		}
	}
}


function getThemePreference() {
	//Check localstorage
	const localPreference = localStorage.getItem('theme')
	if (localPreference) {
		return localPreference === 'dark' ? true : false
	}
	//check media / browser preference
	else {
		const mediaPreference = window.matchMedia('(prefers-color-scheme: dark)')
		if (mediaPreference) {
			return mediaPreference.matches ? true : false
		}
	}
	return false
}