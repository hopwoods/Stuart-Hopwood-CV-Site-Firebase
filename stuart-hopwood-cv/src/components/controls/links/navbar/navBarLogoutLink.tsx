import React, { useCallback } from "react"
import { useLogin } from "../../../../security/useLogin"
import { classes } from "./navBarLink.css"

type LinkProps = {
  value: string
}

export function NavBarLogoutLink({ value }: LinkProps) {
  const { signOut, auth } = useLogin()
  const handleClick = useCallback(async () => {
    await signOut(auth)
  }, [signOut, auth])

  return (
    <React.Fragment>
      <span className={classes.navBarLink} onClick={async () => await handleClick()}>
        {value}
      </span>
    </React.Fragment>
  )
}
