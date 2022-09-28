import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useLogin } from '../../../security/useLogin'
import { Button } from './button'

// const ExitToAppIcon = React.lazy(() => import('@mui/icons-material/ExitToApp'))
// const Button = React.lazy(() => import('./button'))

export default function LoginButton() {
	const { signIn } = useLogin()
	return <Button
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
}