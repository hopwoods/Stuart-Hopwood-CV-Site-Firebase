import { useCallback } from 'react'
import { useLogin } from '../../../security/useLogin'
import Button from './button'

export default function LogoutButton() {
	const { signOut, auth } = useLogin()

	const handleClick = useCallback(async () => {
		await signOut(auth)
	}, [signOut, auth])

	return <Button className="login" onClick={async () => await handleClick()}>Logout</Button>
}
