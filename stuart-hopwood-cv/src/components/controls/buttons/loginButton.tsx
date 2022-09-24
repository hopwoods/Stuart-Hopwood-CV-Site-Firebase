import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useLogin } from '../../../security/useLogin'
import { Button } from './button'

export function LoginButton() {
	const { signIn } = useLogin()
	return (
		<>
			<Button
				id='login-button'
				className="login"
				variant="outlined"
				color="primary"
				size="large"
				endIcon={<ExitToAppIcon />}
				onClick={async () => await signIn()}
			>
				Login
			</Button>
		</>
	)
}