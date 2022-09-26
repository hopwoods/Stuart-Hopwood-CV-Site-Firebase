import React, { Suspense, useCallback } from 'react'
import { useLogin } from '../../../security/useLogin'

const MeetingRoomIcon = React.lazy(() => import('@mui/icons-material/MeetingRoom'))
const Button = React.lazy(() => import('@mui/material/Button'))

export default function LogoutButton() {
	const { signOut, auth } = useLogin()

	const handleClick = useCallback(async () => {
		await signOut(auth)
	}, [signOut, auth])

	return <Suspense>
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
	</Suspense>
}
