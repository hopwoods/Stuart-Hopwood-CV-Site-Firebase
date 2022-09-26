import { toast } from 'react-toastify'
import create from 'zustand'
import { useFirestore } from '../firebase/usefirestore'

//const apiUrl = Globals.ApiSettings.Audience

type AboutTextState = {
	/** Unique ID for the About Text entry */
	id: string

	/** Text Content for the About Text entry */
	text: string

	/** Boolean to show loading icon whilst fetching data */
	loading: boolean

	/** Action to set the About Text state values */
	setText: (id: string, text: string) => void

	/** Action to create or update the About Text in the DB */
	updateAboutText: () => void

	/** Action to get the About Text entry from the DB */
	getAboutText: () => void
}

const showSuccessMessage = () => toast.success('✔️ New About Text Content has been saved')
const showErrorMessage = (errorText: string) => toast.error(`⛔️ ${errorText}`)

const { getDoc } = useFirestore()

export const useAboutTextStore = create<AboutTextState>((set) => ({
	isRecords: false,
	id: 'about',
	text: '',
	loading: false,
	setText: (id: string, text: string) => set({ id: id, text: text }),

	//TODO: Move  this to AboutTextDatabase.ts
	updateAboutText: async () => {

		//TODO: Save ABout Text to the DB

		showSuccessMessage()

	},

	//TODO: Move  this to AboutTextDatabase.ts
	getAboutText: async () => {
		try {
			set({ loading: true })


			const data = await getDoc('aboutText', 'about')

			if (data) {
				set({ id: 'about', text: data['text'] })
			}
			set({ loading: false })

		}
		catch (error) {
			showErrorMessage('Something went wrong fetching the AboutText.')
		}
	}
}))