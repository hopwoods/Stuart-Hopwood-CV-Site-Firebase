import { toast } from 'react-toastify'
import { useFirestore } from '../Hooks/firebase/usefirestore'
import { AboutTextProps } from '../state/aboutTextStore'

export function useAboutTextDatabase() {

	const { getDoc } = useFirestore()

	async function getAboutTextFromDb() {
		try {
			const data = await getDoc('aboutText', 'about')
			if (data)
				return data as AboutTextProps
		}
		catch (error) {
			showErrorMessage('Something went wrong fetching the skills.')
		}
	}

	//const showSuccessMessage = (message: string) => toast.success(message, { theme: 'dark' })
	const showErrorMessage = (errorText: string) => toast.error(errorText, { theme: 'dark' })

	return { getAboutTextFromDb }
}