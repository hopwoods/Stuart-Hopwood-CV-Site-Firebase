import { toast } from 'react-toastify'
import { AboutTextProps } from '../state/aboutTextStore'
import AppDatabase from './appDatabase'

/** Wrapper for AboutText related database actions */
export default class AboutTextDb {
	private firestore: AppDatabase

	constructor(firestore: AppDatabase) {
		this.firestore = firestore
	}

	getAboutTextFromDb = async () => {
		try {
			const data = await this.firestore.getDoc('aboutText', 'about')
			if (data)
				return data as AboutTextProps
		}
		catch (error) {
			this.showErrorMessage('Something went wrong fetching the skills.')
		}
	}

	showSuccessMessage = (message: string) => toast.success(message, { theme: 'dark' })
	showErrorMessage = (errorText: string) => toast.error(errorText, { theme: 'dark' })

}