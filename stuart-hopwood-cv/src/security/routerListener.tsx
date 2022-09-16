import { getAuth } from "firebase/auth";
import React, { ReactNode, useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import { useFirebase } from "../firebase/useFirebase";
import { useGlobalStore } from "../state";
import { useLogin } from "./useLogin";

export function RouterListener({ children }: { children?: ReactNode }) {
    const { firebaseApp } = useFirebase()
    const { checkForAuthenticatedUser } = useLogin()
    const { user, isAuthenticated } = useGlobalStore()
    const auth = useMemo(() => { return getAuth(firebaseApp) }, [])
    const location = useLocation();

    useEffect(() => {
        checkForAuthenticatedUser(user, isAuthenticated, auth)
    }, [location]);

    return <React.Fragment>
        {children}
    </React.Fragment>

}