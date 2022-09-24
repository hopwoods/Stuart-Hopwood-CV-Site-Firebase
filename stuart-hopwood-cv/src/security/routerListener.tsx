
import React, { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router'
import { useGlobalStore } from '../state'
import { useLogin } from './useLogin'

export function RouterListener({ children }: { children?: ReactNode }) {
	const { checkForAuthenticatedUser, auth } = useLogin()
	const { user, isAuthenticated } = useGlobalStore()
	const location = useLocation()

	useEffect(() => {
		checkForAuthenticatedUser(user, isAuthenticated, auth)
	}, [location])

	return <React.Fragment>
		{children}
	</React.Fragment>

}