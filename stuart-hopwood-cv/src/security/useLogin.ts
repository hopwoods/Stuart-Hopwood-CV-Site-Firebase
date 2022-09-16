import { Auth, getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect, signOut, User, UserCredential } from "firebase/auth"
import { useCallback, useEffect, useMemo } from "react"
import { useNavigate } from "react-router"
import { useFirebase } from "../firebase/useFirebase"
import { useGlobalStore } from "../state"

export function useLogin() {
    const { firebaseApp } = useFirebase()
    const { setAccessToken, storeUser, deleteUser, isAuthenticated, setIsAuthenticated, user, setAuthenticating } = useGlobalStore()

    const provider = useMemo(() => { return new GoogleAuthProvider() }, [])
    const auth = useMemo(() => { return getAuth(firebaseApp) }, [])
    const navigate = useNavigate()

    useEffect(() => {
        checkForAuthenticatedUser(user, isAuthenticated, auth)
        if (!isAuthenticated) {
            getRedirectResult(auth) //Check if a user has just logged in
                .then((result) => {
                    if (result) {
                        getToken(result)
                        registerUser(result.user)
                        navigate("/admin")
                    }
                }).catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    const email = error.customData.email
                    const credential = GoogleAuthProvider.credentialFromError(error)

                    console.error(`${errorCode}: ${errorMessage}`)
                })
        }

        if (isAuthenticated) {
            //watch for user authentication changes and register / de-register accordingly
            const unregisterAuthObserver = auth.onAuthStateChanged(user => {
                if (!user) {
                    unRegisterUser()
                    navigate("/")
                } else {
                    registerUser(user)
                }
            })
            return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
        }
        return

    }, [provider, auth, user, isAuthenticated])

    const signIn = useCallback(async () => {
        await signInWithRedirect(auth, provider)
        setAuthenticating(true)
    }, [])

    function unRegisterUser() {
        deleteUser()
        setIsAuthenticated(false)
        sessionStorage.removeItem("uid")
        setAuthenticating(false)
    }

    function registerUser(user: User) {
        storeUser(user)
        setIsAuthenticated(true)
        sessionStorage.setItem("uid", user.uid)
        setAuthenticating(false)
    }
    function getToken(result: UserCredential) {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        if (credential) {
            const token = credential.accessToken
            if (token) {
                setAccessToken(token)
            }
        }
    }

    function checkForAuthenticatedUser(user: User | undefined, isAuthenticated: boolean, auth: Auth) {
        if (sessionStorage.getItem("uid") && user && !isAuthenticated) {
            registerUser(user)
        }

        if (sessionStorage.getItem("uid") && !user && !isAuthenticated && auth.currentUser) {
            registerUser(auth.currentUser)
        }
    }

    return { signIn, signOut, auth, checkForAuthenticatedUser }

}

