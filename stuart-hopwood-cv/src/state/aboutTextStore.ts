import { StoreApi } from 'zustand'
import AboutTextDb from '../database/aboutTextDb'
import { AppStore } from './appStore'

export type AboutTextProps = {
	/** Unique ID for the About Text entry */
	id?: string

	/** Text Content for the About Text entry */
	text: string
}

export type AboutTextSlice = {
	aboutText: AboutTextProps
	aboutTextDb?: AboutTextDb

	/** Boolean to show loading icon whilst fetching data */
	loading: boolean

	/** Action to set the About Text state values */
	setAboutText: (aboutText: AboutTextProps) => void
	storeAboutTextDb: (db: AboutTextDb) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createAboutTextStore(set: StoreApi<AppStore>['setState'], get: StoreApi<AppStore>['getState']): AboutTextSlice {
	return {
		aboutText: { id: '', text: '' },
		loading: false,
		setAboutText: (aboutText: AboutTextProps) => set({ aboutText: aboutText }),
		storeAboutTextDb: (db: AboutTextDb) => {
			console.log('Storing AboutText Database Wrapper')
			set({ aboutTextDb: db })
		}
	}
}