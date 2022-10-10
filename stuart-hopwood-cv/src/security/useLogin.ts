import { Auth, getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect, signOut, User } from 'firebase/auth'
import { useCallback, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { useAppStore } from '../state/appStore'

export function useLogin() {
	const { firebaseApp, user, storeUser, deleteUser, isAuthenticated, setIsAuthenticated, setAuthenticating } = useAppStore()
	const provider = useMemo(() => { return new GoogleAuthProvider() }, [])
	const auth = useMemo(() => { return getAuth(firebaseApp) }, [firebaseApp])
	const navigate = useNavigate()

	const unRegisterUser = useCallback(() => {
		deleteUser()
		setIsAuthenticated(false)
		sessionStorage.removeItem('uid')
		setAuthenticating(false)
	}, [deleteUser, setAuthenticating, setIsAuthenticated])

	const registerUser = useCallback((user: User) => {
		storeUser(user)
		setIsAuthenticated(true)
		sessionStorage.setItem('uid', user.uid)
		setAuthenticating(false)
	}, [setAuthenticating, setIsAuthenticated, storeUser])

	const checkForAuthenticatedUser = useCallback((user: User | undefined, isAuthenticated: boolean, auth: Auth) => {
		if (sessionStorage.getItem('uid') && user && !isAuthenticated) {
			registerUser(user)
		}
		if (sessionStorage.getItem('uid') && auth.currentUser) {
			registerUser(auth.currentUser)
		}
	}, [registerUser])

	useEffect(() => {
		checkForAuthenticatedUser(user, isAuthenticated, auth)
		if (!isAuthenticated) {
			getRedirectResult(auth) //Check if a user has just logged in
				.then((result) => {
					if (result) {
						registerUser(result.user)
						navigate('/admin')
					}
				}).catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message
					console.error(`${errorCode}: ${errorMessage}`)
				})
		}

		if (isAuthenticated) {
			//watch for user authentication changes and register / de-register accordingly
			const unregisterAuthObserver = auth.onAuthStateChanged(user => {
				if (!user) {
					unRegisterUser()
					navigate('/')
				} else {
					registerUser(user)
				}
			})
			return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
		}
		return

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		auth,
		registerUser,
		//navigate,
		unRegisterUser,
		checkForAuthenticatedUser,
		user,
		isAuthenticated
	])

	const signIn = useCallback(async () => {
		console.log('Signing in...')
		setAuthenticating(true)
		sessionStorage.setItem('authPending', 'true')
		await signInWithRedirect(auth, provider)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth, provider, setAuthenticating, isAuthenticated])

	return { signIn, signOut, auth, checkForAuthenticatedUser }
}