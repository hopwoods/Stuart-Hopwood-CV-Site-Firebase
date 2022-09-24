import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import { Button } from '@mui/material'
import { useCallback } from 'react'
import { useLogin } from '../../../security/useLogin'

export function LogoutButton() {
	const { signOut, auth } = useLogin()

	const handleClick = useCallback(async () => {
		await signOut(auth)
	}, [signOut, auth])

	return (
		<Button
			className="login"
			variant="outlined"
			color="primary"
			size="large"
			endIcon={<MeetingRoomIcon />}
			onClick={async () => await handleClick()}
		>
			Logout
		</Button>
	)
}
