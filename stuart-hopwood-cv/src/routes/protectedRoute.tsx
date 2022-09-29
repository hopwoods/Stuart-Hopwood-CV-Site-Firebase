import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppStore } from '../state/appStore'

type ProtectedRouteProps = {
	redirectPath: string
	children: ReactNode
}

export default function ProtectedRoute({ redirectPath, children }: ProtectedRouteProps) {
	const { isAuthenticated } = useAppStore()
	if (!isAuthenticated) {
		return <Navigate to={redirectPath} replace />
	}

	return <React.Fragment>
		{children}
	</React.Fragment>
};
