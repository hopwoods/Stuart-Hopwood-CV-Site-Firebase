import { initializeApp } from 'firebase/app'
//import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'
import { enableMultiTabIndexedDbPersistence, getFirestore } from 'firebase/firestore'
import { useMemo } from 'react'
import { useAppStore } from '../../state/appStore'

export default function useFirebase() {
	const { firebaseInitiated, setFirebaseInitiated, storeDb, storeFirebaseApp } = useAppStore()

	const firebaseConfig = useMemo(() => {
		return {
			apiKey: 'AIzaSyApd0HU0GxRW_fQEBKyN1YnYfLLljXELDw',
			authDomain: 'stuart-hopwood-cv.firebaseapp.com',
			databaseURL: 'https://stuart-hopwood-cv-default-rtdb.europe-west1.firebasedatabase.app',
			projectId: 'stuart-hopwood-cv',
			storageBucket: 'stuart-hopwood-cv.appspot.com',
			messagingSenderId: '502264664855',
			appId: '1:502264664855:web:b0d12f12d3c41e4c24dd52',
			measurementId: 'G-JFF4C0R4MX',
		}
	}, [])

	const firebaseApp = useMemo(() => {
		if (!firebaseInitiated) {
			console.log('Init Firebase')
			return initializeApp(firebaseConfig)
		}
	}, [firebaseConfig, firebaseInitiated])

	//const analytics = getAnalytics(firebaseApp);

	// initializeAppCheck(firebaseApp, {
	// 	provider: new ReCaptchaV3Provider('6LfcdQIiAAAAAGFXyfauaf1CxTmjX014fJzJnQWI'),  // reCAPTCHA v3 site key (public key)
	// 	isTokenAutoRefreshEnabled: true
	// })

	// Initialize Cloud Firestore and get a reference to the service
	const db = useMemo(() => {
		if (!firebaseInitiated && firebaseApp) {
			console.log('Init FIrestore Db')
			return getFirestore(firebaseApp)
		}
	}, [firebaseApp, firebaseInitiated])

	if (db && firebaseApp && !firebaseInitiated) {
		console.log('Enable Persistence')
		enableMultiTabIndexedDbPersistence(db)
			.catch((err) => {
				if (err.code === 'failed-precondition') {
					// Multiple tabs open, persistence can only be enabled
					// in one tab at a a time.
					// ...
				} else if (err.code === 'unimplemented') {
					// The current browser does not support all of the
					// features required to enable persistence
					// ...
				}
			})

		storeDb(db)
		storeFirebaseApp(firebaseApp)
		setFirebaseInitiated(true)

		// disableNetwork(db).then(() => {
		// 	console.log('Network has been disabled')
		// })

	}

	return { db, firebaseApp }
}

