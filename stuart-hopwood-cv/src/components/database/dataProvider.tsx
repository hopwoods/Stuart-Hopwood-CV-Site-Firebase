import React, { useCallback, useEffect } from 'react'
import { initialiseAndPopulateData } from '../../database/initialiseAndPopulateData'
import useFirebase from '../../Hooks/firebase/useFirebase'
import { useAppStore } from '../../state/appStore'

/** Initialises and stores data to the application state store */
export default function DataProvider({ children }: { children: React.ReactNode }) {
	useFirebase()
	const { db, storeAppDb, setSkills, setAboutText } = useAppStore()

	const initAndPopulateData = useCallback(async () => {
		try {
			await initialiseAndPopulateData({ db, storeAppDb, setSkills, setAboutText })
		} catch (error) {
			console.error(`InitAndPopulateData: ${error}`)
		}
	}, [db, setAboutText, storeAppDb, setSkills])

	useEffect(() => {
		initAndPopulateData()
	}, [initAndPopulateData])

	return <>{children}</>
}