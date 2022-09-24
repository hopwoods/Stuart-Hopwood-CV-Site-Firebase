import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalStore } from '../state'

type ProtectedRouteProps = {
	redirectPath: string
	children: ReactNode
}

export function ProtectedRoute({ redirectPath, children }: ProtectedRouteProps) {
	const { isAuthenticated } = useGlobalStore()
	if (!isAuthenticated) {
		return <Navigate to={redirectPath} replace />
	}

	return <React.Fragment>
		{children}
	</React.Fragment>
};
