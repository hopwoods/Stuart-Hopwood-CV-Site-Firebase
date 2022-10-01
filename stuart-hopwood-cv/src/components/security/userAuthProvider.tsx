import { getAuth } from 'firebase/auth'
import React, { ReactNode, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router'
import useFirebase from '../../Hooks/firebase/useFirebase'
import { useLogin } from '../../security/useLogin'
import { useAppStore } from '../../state/appStore'

export function UserAuthProvider({ children }: { children?: ReactNode }) {
	const { firebaseApp } = useFirebase()
	const { checkForAuthenticatedUser } = useLogin()
	const { user, isAuthenticated } = useAppStore()
	const auth = useMemo(() => { return getAuth(firebaseApp) }, [firebaseApp])
	const location = useLocation()

	useEffect(() => {
		checkForAuthenticatedUser(user, isAuthenticated, auth)
	}, [auth, checkForAuthenticatedUser, isAuthenticated, location, user])

	return <React.Fragment>
		{children}
	</React.Fragment>

}