import { useCallback } from 'react'
import { useLogin } from '../../../security/useLogin'
import { classes } from './logoutLink.css'

type LinkProps = {
	children: React.ReactNode
}

export default function NavBarLogoutLink({ children }: LinkProps) {
	const { signOut, auth } = useLogin()
	const handleClick = useCallback(async () => {
		await signOut(auth)
	}, [signOut, auth])

	return <span className={classes.logoutLink} onClick={async () => await handleClick()}>
		{children}
	</span>
}