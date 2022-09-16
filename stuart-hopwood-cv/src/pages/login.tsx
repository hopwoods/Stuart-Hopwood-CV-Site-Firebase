import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LoginButton } from "../components/controls"
import { Loading, Page } from "../components/layout"
import { useGlobalStore } from "../state"
import { classes } from "./login.css"

function Banner() {
  return (
    <h1 className="inverse">Login</h1>
  )
}

function Login() {
  const { isAuthenticating } = useGlobalStore()
  const [isAuthPending, setAuthPending] = useState<boolean>(false);
  const sessionValue = sessionStorage.getItem("authPending")
  useEffect(() => {
    if (sessionValue == "true") {
      setAuthPending(true)
    }

  }, [isAuthenticating])

  function LoginScreen() {
    return <>
      <h2>So...You want to login huh?</h2><p>
        Well that is nice of you, if you are Stuart Hopwood, go ahead and
        click login and start updating that CV.
        <br />
        If not, this probably isn't where you should be. Perhap you should
        head to the{" "}
        <Link className="link" to="/home">
          Home page
        </Link>{" "}
        and read what I can do.
      </p>
      <LoginButton />
    </>
  }
  return (
    <React.Fragment>
      <Page id="Login" fullscreen={false} BannerContent={Banner}>
        <div className={classes.login}>
          {!isAuthPending ? <LoginScreen /> : <Loading loading />}
        </div>
      </Page>
    </React.Fragment>
  )
}

export default Login
