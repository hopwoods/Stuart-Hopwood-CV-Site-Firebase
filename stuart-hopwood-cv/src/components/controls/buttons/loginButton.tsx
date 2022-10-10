import { useLogin } from '../../../security/useLogin'
import { Button } from './button'

export default function LoginButton() {
	const { signIn } = useLogin()
	return <Button id='login-button' className="login" onClick={async () => await signIn()}>Login</Button>
}